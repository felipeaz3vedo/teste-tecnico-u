export interface RegisterPatientDTO {
  nomeCompleto: string;
  telefone: string;
  dataNascimento: string;
  sexo: string;
  ala: 'A' | 'B';
  quarto: number;
}
