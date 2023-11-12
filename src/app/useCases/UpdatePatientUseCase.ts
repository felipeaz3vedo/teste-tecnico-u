import { inject, injectable } from 'inversify';
import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';
import { UpdatePatientDTO } from '../DTOs/UpdatePatientDTO';

@injectable()
export class UpdatePatientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(id: number, data: UpdatePatientDTO) {
    const patient = await this.patientRepository.update(id, data);

    return patient;
  }
}
