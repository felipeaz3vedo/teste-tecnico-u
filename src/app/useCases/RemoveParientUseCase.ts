import { inject, injectable } from 'inversify';
import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';

@injectable()
export class RemoveParientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(id: number) {
    await this.patientRepository.remove(id);
  }
}
