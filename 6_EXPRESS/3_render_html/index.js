//Muda para aquele HTML que a gente esta renderizando. Perceba o poder onde de modo fácil conseguimos criar uma rota no nosso sistema e renderizar o arquivo de nossa escolha. Aqui a gente teve que ter uma ajudinha do PATH, mas futuramente vai aprender outras maneiras de renderizar arquivos sem essa sintaxe.

const express = require('express')
const app = express()
const port = 3000

const path = require('path') //Modulo interno

const basePath = path.join(__dirname, 'templates') //Acessar a pasta templates

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) //Envia a resposta de um arquivo com o caminho relativo para o arquivo.
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})