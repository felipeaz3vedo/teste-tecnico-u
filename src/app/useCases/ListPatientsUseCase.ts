import { inject, injectable } from 'inversify';
import { Ala, PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';

@injectable()
export class ListPatientsUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(ala?: Ala) {
    const patients = await this.patientRepository.list(ala);

    return patients;
  }
}
