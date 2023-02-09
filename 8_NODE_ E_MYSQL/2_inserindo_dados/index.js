const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json()) //Pegar o Body em JSON

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) { //Rota para inserir os livros
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`//Query = instrucao do bando de dados

  conn.query(query, function (err) { //Executando a Query
    if (err) {
      console.log(err)
    }

    res.redirect('/') //Prosseguir se não tiver err
  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fuvest01',
  database: 'nodemysql',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})