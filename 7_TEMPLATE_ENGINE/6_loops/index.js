const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine()) 
app.set("view engine", "handlebars");

app.get("/dashboard", function (req, res) { 

  const items = ["Item a", "Item b", "Item c"]

  res.render("dashboard", {items}); //enviando items para o Front
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