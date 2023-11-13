import { injectable } from 'inversify';

import { AppError } from '../../../infra/errors/AppError';
import { Patient } from '../../../entities/Patient';
import { prisma } from '../../../libs/prisma';

import { Ala, PatientRepository } from '../PatientRepository';
import { changeTimezone } from '../../../utils/changeTimezone';

@injectable()
export class PrismaPatientRepository implements PatientRepository {
  async list(ala: Ala): Promise<Patient[]> {
    const patients = await prisma.patient.findMany({
      where: {
        ala
      }
    });

    return patients;
  }

  async show(id: number): Promise<Patient | null> {
    const patient = await prisma.patient.findUnique({
      where: {
        id
      }
    });

    if (!patient) throw new AppError('Patient not found', 404);

    return patient;
  }

  async register(data: Patient): Promise<Patient> {
    const patient = await prisma.patient.create({
      data: {
        ...data,
        dataAtualizacao: changeTimezone(new Date(), -3),
        dataCriacao: changeTimezone(new Date(), -3)
      }
    });

    return patient;
  }

  async update(id: number, data: Partial<Patient>): Promise<Patient> {
    await this.show(id);

    const patient = await prisma.patient.update({
      where: {
        id
      },
      data: {
        ...data,
        dataAtualizacao: changeTimezone(new Date(), -3)
      }
    });

    return patient;
  }

  async remove(id: number): Promise<void> {
    await this.show(id);

    await prisma.patient.delete({
      where: {
        id
      }
    });
  }
}
