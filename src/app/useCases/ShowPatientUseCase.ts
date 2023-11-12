import { inject, injectable } from 'inversify';
import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';

@injectable()
export class ShowPatientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(id: number) {
    const patient = await this.patientRepository.show(id);

    return patient;
  }
}
