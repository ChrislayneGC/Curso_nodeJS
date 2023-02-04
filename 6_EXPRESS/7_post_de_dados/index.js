const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

// LENDO O BODY
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json()) //Tuda a minha req do body é transformada num objeto JavaScript que a gente consegue ler através de req.body ele vai chegar a essa requisição.

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)

app.get('/users/add', (req, res) => { //Vai enviar um arquivo pro Front.
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => { //Criando a rota POST que vai tratar o que vem de alguma requisição.
  console.log(req.body) //Ler o corpo da req.

  const name = req.body.name //Extraindo variaveis
  const age = req.body.age

  console.log(name)
  console.log(age)
})

// ANTES DO "/"
app.get('/users/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`) // Fim de requisicao
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})