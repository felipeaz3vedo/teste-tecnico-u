export interface Patient {
  id?: number;
  nomeCompleto: string;
  telefone: string;
  dataNascimento: Date | string;
  sexo: string;
  ala: string;
  quarto: number;
  dataAtualizacao?: Date;
  dataCriacao?: Date;
}
