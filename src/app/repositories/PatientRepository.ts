import { Patient } from '../../entities/Patient';

export type Ala = 'A' | 'B';

export interface PatientRepository {
  register(data: Patient): Promise<Patient>;
  list(ala?: Ala): Promise<Patient[]>;
  show(id: number): Promise<Patient | null>;
  update(id: number, data: Partial<Patient>): Promise<Patient>;
  remove(id: number): Promise<void>;
}
