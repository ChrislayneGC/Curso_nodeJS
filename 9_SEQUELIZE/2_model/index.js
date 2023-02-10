//Criando tabelas baseado em Models

const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const User = require('./models/User') //Importando model User

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

// CRIAR TABELAS E RODAS O APP
conn
  .sync() //Criar tabela quando precisar
  .then(() => { 
    app.listen(3000)
  })
  .catch((err) => console.log(err))