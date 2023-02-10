const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const User = require('./models/User')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use( //Criar rota para ver o formulário
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', async function (req, res) {
  User.findAll({ raw: true }) //Só seguir quando o usuário chegar aqui
    .then((users) => {
      console.log(users)
      res.render('home', { users: users })
    })
    .catch((err) => console.log(err))
})

app.get('/users/create', function (req, res) {
  res.render('adduser')
})

app.post('/users/create', async function (req, res) { //Criando Rota Post
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter //LET = muda o valor dependendo da resposta

  if (newsletter === 'on') { //Confirmacao do recebimento de notificacao
    newsletter = true
  }

  User.create({ name, occupation, newsletter }) //Criar o usuário

  res.redirect('/')
})

// CRIAR TABELAS E RODAR O APP
conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))