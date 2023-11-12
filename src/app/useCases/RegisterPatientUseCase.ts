import { inject, injectable } from 'inversify';
import { RegisterPatientDTO } from '../DTOs/RegisterPatientDTO';
import { PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';

@injectable()
export class RegisterPatientUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute({ nomeCompleto, telefone, dataNascimento, sexo, ala, quarto }: RegisterPatientDTO) {
    const patient = await this.patientRepository.register({
      nomeCompleto,
      telefone,
      dataNascimento,
      sexo,
      ala,
      quarto
    });

    return patient;
  }
}
