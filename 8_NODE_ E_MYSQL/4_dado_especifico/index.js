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

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

  conn.query(query, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

app.get('/books', function (req, res) {
  const query = `SELECT * FROM books`

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
    }

    const books = data

    console.log(data)

    res.render('books', { books })
  })
})

app.get('/books/:id', function (req, res) { //Criar Query de select individual, para acessar um unico dado utilizando o ID.
  const id = req.params.id //Pegar parametro da URL

  const query = `SELECT * FROM books WHERE id = ${id}` //Filtro para pegar só 1 ID.

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
    }

    const book = data[0] //O 0 sempre é o primeiro no Array

    console.log(data[0]) //Mostrando o ID do Book

    res.render('book', { book })
  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})