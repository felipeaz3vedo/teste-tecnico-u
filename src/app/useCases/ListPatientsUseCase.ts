import { inject, injectable } from 'inversify';
import { Ala, PatientRepository } from '../repositories/PatientRepository';
import { PrismaPatientRepository } from '../repositories/prisma/PrismaPatientRepository';
import { dateTimeToDate } from '../../utils/dateTimeToDate';

@injectable()
export class ListPatientsUseCase {
  constructor(
    @inject(PrismaPatientRepository)
    private readonly patientRepository: PatientRepository
  ) {}

  async execute(ala?: Ala) {
    const patients = await this.patientRepository.list(ala);

    const formatedPatients = patients.map((patient) => {
      patient.dataNascimento = dateTimeToDate(patient.dataNascimento);

      return patient;
    });

    return formatedPatients;
  }
}
