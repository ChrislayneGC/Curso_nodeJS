const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn') //Conexão com o banco

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json()) //Ler JSON

app.use(express.static('public')) 

app.listen(3000) 