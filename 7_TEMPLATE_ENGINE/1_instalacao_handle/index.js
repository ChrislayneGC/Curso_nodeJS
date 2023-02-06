const express = require("express")
const exphbs = require("express-handlebars") //Pacote com uma convencao

const app = express() //Inicializa o express na constante app

app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars') //Atributo com handlebars

app.get('/', function (req, res) { //renderizar a view
    res.render('home', { layout: false }) //Renderizar a view Home
})

app.listen(3000)