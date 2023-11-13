import { inject, injectable } from 'inversify';

import { RegisterPatientDTO } from '../DTOs/RegisterPatientDTO';

import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';
import { dateTimeToDate } from '../../utils/dateTimeToDate';
import { normalizePhoneNumber } from '../../utils/normalizePhoneNumber';
import { convertStrToDateTime } from '../../utils/convertStrToDateTime';

@injectable()
export class RegisterPatientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute({
    nomeCompleto,
    telefone,
    dataNascimento,
    sexo,
    ala,
    quarto
  }: RegisterPatientDTO) {
    const normalizedPhoneNumber = normalizePhoneNumber(telefone);
    const birthDateObject = convertStrToDateTime(dataNascimento);

    const patient = await this.patientRepository.register({
      nomeCompleto,
      telefone: normalizedPhoneNumber,
      dataNascimento: birthDateObject,
      sexo,
      ala,
      quarto
    });

    patient.dataNascimento = dateTimeToDate(patient.dataNascimento);

    return patient;
  }
}
