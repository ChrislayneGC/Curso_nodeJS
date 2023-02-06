const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs =exphbs.create({
  partialsDir: ["views/partials"], //Configurando o diretório dos partials
})

app.engine('handlebars', hbs.engine()) 
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.get("/dashboard", function (req, res) { 

  const items = ["Item a", "Item b", "Item c"]

  res.render("dashboard", {items}); //enviando items para o Front
});

app.get('/post', (req, res) => { //O objeto POST é complexo, um bom caso para usar o IF
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 4, //Numero de comentarios
  }

  res.render("blogpost", { post });
})

app.get("/blog", function (req, res) {
  const posts = [ //Array de objetos
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Aprender Ruby",
      category: "Ruby",
      body: "Teste",
      comments: 4,
    },
  ]

  res.render('blog', {posts})
});

app.get("/", function (req, res) {
  const user = {
    name: "Chrislayne",
    surname: "Godoy",
    age: 30,
  };

  res.render("home", { user: user, auth: true, approved: true });
});



app.listen(3000, () => {
  console.log('App funcionando!')
})