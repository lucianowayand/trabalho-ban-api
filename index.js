import express from 'express'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/clientes', async (req, res) => {

    try {
        const clientes = await prisma.$queryRaw(
            Prisma.sql`SELECT * FROM "Clientes"`
        )
        res.json(clientes)
    } catch (e) {
        console.log(e)
        res.json({ msg: e })
    }

})

app.get('/animais', async (req, res) => {

    const animais = await prisma.$queryRaw`Select * From Animais`

    res.json(animais)

})


const server = app.listen(3000)