const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

app.use(express.static('public')) //Ponte para os arquivos estaticos 

app.get('/', function (req, res) { //Rota
  res.render('home')
})

const conn = mysql.createConnection({ //Criando conexão
  host: 'localhost',
  user: 'root',
  password: 'fuvest01',
  database: 'nodemysql',
})

conn.connect(function (err) { //É necessário estabelecer a conexão a cada iteração com a minha aplicação.
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})