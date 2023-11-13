export interface UpdatePatientDTO {
  nomeCompleto?: string;
  telefone?: string;
  dataNascimento?: Date | string;
  sexo?: string;
  ala?: 'A' | 'B';
  quarto?: number;
}
