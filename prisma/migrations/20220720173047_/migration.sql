-- CreateTable
CREATE TABLE "Clientes" (
    "cpf" BIGINT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" BIGINT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Animais" (
    "idAnimais" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "clientesCpf" BIGINT NOT NULL,

    CONSTRAINT "Animais_pkey" PRIMARY KEY ("idAnimais")
);

-- AddForeignKey
ALTER TABLE "Animais" ADD CONSTRAINT "Animais_clientesCpf_fkey" FOREIGN KEY ("clientesCpf") REFERENCES "Clientes"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
