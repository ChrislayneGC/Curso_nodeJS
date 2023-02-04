// A gente quer não perder tempo abrindo e fechando servidor a toda hora, queremos algo mais automático e o NODEMON proporciona isso pra gente.

const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})