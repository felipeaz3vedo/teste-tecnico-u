import { injectable } from 'inversify';
import { Patient } from '../../../entities/Patient';
import { Ala, PatientRepository } from '../PatientRepository';
import { AppError } from '../../../infra/errors/AppError';

@injectable()
export class InMemoryPatientRepository implements PatientRepository {
  public patients: Patient[] = [];

  generatePatientId(): number {
    const ids = this.patients
      .filter((patient) => patient.id !== undefined)
      .map((patient) => patient.id as number);

    if (ids.length === 0) {
      return 1;
    }

    const maiorId = Math.max(...ids);

    return maiorId + 1;
  }

  async list(ala: Ala): Promise<Patient[]> {
    let patients = this.patients;

    if (ala) {
      patients = patients.filter((patient) => patient.ala === ala);
    }

    return patients;
  }

  async show(id: number): Promise<Patient | null> {
    const patient = this.patients.find((patient) => patient.id === id);

    if (!patient) throw new AppError('Patient not found', 404);

    return patient || null;
  }

  async register(data: Patient): Promise<Patient> {
    const id = this.generatePatientId();

    const patient = {
      id,
      nomeCompleto: data.nomeCompleto,
      telefone: data.telefone,
      dataNascimento: data.dataNascimento,
      sexo: data.sexo,
      ala: data.ala,
      quarto: data.quarto,
      updatedAt: new Date(),
      createdAt: new Date()
    };

    this.patients.push(patient);

    return patient;
  }

  async update(id: number, data: Partial<Patient>): Promise<Patient> {
    const index = this.patients.findIndex((patient) => patient.id === id);

    if (index === -1) throw new AppError('Patient not found', 404);

    this.patients[index] = {
      ...this.patients[index],
      ...data
    };

    const editedPatient = this.patients[index];

    return editedPatient;
  }

  async remove(id: number) {
    const patientExists = this.show(id);

    if (!patientExists) throw new AppError('Patient not found', 404);

    this.patients = this.patients.filter((patient) => patient.id !== id);
  }
}
