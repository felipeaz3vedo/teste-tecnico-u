export interface RegisterPatientDTO {
  nomeCompleto: string;
  telefone: string;
  dataNascimento: Date;
  sexo: string;
  ala: 'A' | 'B';
  quarto: number;
}
