import { inject, injectable } from 'inversify';
import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';
import { UpdatePatientDTO } from '../DTOs/UpdatePatientDTO';
import { dateTimeToDate } from '../../utils/dateTimeToDate';
import { normalizePhoneNumber } from '../../utils/normalizePhoneNumber';
import { convertStrToDateTime } from '../../utils/convertStrToDateTime';

@injectable()
export class UpdatePatientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(id: number, data: UpdatePatientDTO) {
    data.telefone && (data.telefone = normalizePhoneNumber(data.telefone));

    data.dataNascimento &&
      (data.dataNascimento = convertStrToDateTime(data.dataNascimento));

    const patient = await this.patientRepository.update(id, data);

    patient.dataNascimento = dateTimeToDate(patient.dataNascimento);

    return patient;
  }
}
