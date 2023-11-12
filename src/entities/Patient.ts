export interface Patient {
  id?: number;
  nomeCompleto: string;
  telefone: string;
  dataNascimento: Date;
  sexo: string;
  ala: string;
  quarto: number;
  updatedAt?: Date;
  createdAt?: Date;
}
