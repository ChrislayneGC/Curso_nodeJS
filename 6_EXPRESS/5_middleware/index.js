//  Então a nossa bifurcação de lógica já está aqui. Mas NEXT é necessário para prosseguir a aplicação e não travar ela. Lembre-se: O MIDDLEWARE pode ser atrelado a qualquer parte do nosso sistema mas tem que dar um NEXT para o usuário prosseguir, esse NEXT vem junto na função anônima do Middleware pra gente poder utilizar quando a gente quer seguir em alguma etapa.

const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

var checkAuth = function (req, res, next) { //Checar a autenticação
  req.authStatus = true //Vai vir da requisiçao determinando se o usuário esta autenticado.

  if (req.authStatus) { //Estabelecendo o Middle
    console.log('Está logado, pode continuar')
    next() //Vai pra proxima etapa de aplicacao
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth) //Método do Express

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})