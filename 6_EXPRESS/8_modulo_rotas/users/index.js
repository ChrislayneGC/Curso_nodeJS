//Então a gente externalizou as URLs de usuário para um arquivo. E isso vai fazer com que nossa aplicação fique muito mais simples de ser entendida. E também pode criar mais outras rotas sem ter medo de deixar muito código aqui dentro.

var express = require('express')
var router = express.Router() //Criando o Router

const path = require('path') //

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)
})

// ANTES DO "/"
router.get('/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router 