const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))