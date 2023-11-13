-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "nome_completo" VARCHAR(100) NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_de_nascimento" DATE NOT NULL,
    "sexo" VARCHAR(100) NOT NULL,
    "ala" CHAR(1) NOT NULL,
    "quarto" SMALLINT NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "patients_id_idx" ON "patients"("id");
