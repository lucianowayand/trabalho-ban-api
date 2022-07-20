import express from 'express'
import bodyParser from 'body-parser'

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(bodyParser.json())

app.get('/clientes', async (req, res) => {

    try {
        const clientes = await prisma.$queryRaw(
            Prisma.sql`SELECT * FROM "Clientes"`
        )
        res.json(clientes)
    } catch (e) {
        res.json({ msg: e })
    }

})

app.post('/clientes', async (req, res) => {

    try {
        const clientes = await prisma.$queryRaw(
            Prisma.sql`INSERT INTO "Clientes" VALUES (${req.body.cpf}, ${req.body.nomeCliente}, ${req.body.telefone}) `
        )
        res.json({msg: "Criado com sucesso"})
    } catch (e) {
        res.json({ msg: e })
    }

})


app.get('/clientes/animais', async (req, res) => {

    try {
        const resultado = await prisma.$queryRaw(
            Prisma.sql`SELECT * FROM "Clientes" JOIN "Animais" ON cpf="cpfDono"`
        )
        res.json(resultado)
    } catch (e) {
        res.json({ msg: e })
    }

})

app.get('/animais', async (req, res) => {

    try {
        const animais = await prisma.$queryRaw(
            Prisma.sql`SELECT * FROM "Animais"`
        )
        res.json(animais)
    } catch (e) {
        res.json({ msg: e })
    }

})

app.post('/animais', async (req, res) => {

    try {
        const animais = await prisma.$queryRaw(
            Prisma.sql`INSERT INTO "Animais" ("nomeAnimal", tamanho, tipo, "dataNasc", "cpfDono") VALUES (${req.body.nomeAnimal}, ${req.body.tamanho}, ${req.body.tipo}, ${new Date(req.body.dataNasc)}, ${req.body.cpfDono}) `
        )
        res.json({msg: "Criado com sucesso"})
    } catch (e) {
        res.json({ msg: e })
    }

})

app.get('/animais/tipo/:tipo', async (req, res) => {

    try {
        const animais = await prisma.$queryRaw(
            Prisma.sql`SELECT COUNT(*) FROM (SELECT * FROM "Clientes" WHERE cpf = any (SELECT "cpfDono" FROM "Animais" WHERE tipo = ${req.params.tipo})) as asd`
        )
        res.send("Quantidade de donos: "+Number(animais[0].count))
    } catch (e) {
        console.log(e)
        res.json({ msg: e })
    }

})

const server = app.listen(3000)