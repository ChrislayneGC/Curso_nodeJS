// Porque a minha condição de Bolero é lembrada da logica de programacao é se é  verdadeira ou não. Se (não) ele não imprime nada seguindo o código. Se está autenticado ele ve esse paragrafo, se (não) não. É assim que podemos usar o IF. 

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine()) 
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  const user = {
    name: "Chrislayne",
    surname: "Godoy",
  };

  res.render("home", { user: user, auth: true, approved: true });
});

app.get("/dashboard", function (req, res) { 
  res.render("dashboard"); //Renderizando uma view chamada dashboard
});

app.listen(3000);