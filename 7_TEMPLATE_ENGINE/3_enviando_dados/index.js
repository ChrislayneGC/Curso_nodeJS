const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Chrislayne',
    surname: 'Godoy',
    age: 29,
  }

  const palavra = 'Teste' //Palavra disponivel la no front

  res.render('home', { user: user,palavra }) //Especificando a chave e o valor // Acesso ao User lá no front
})

app.listen(3000)