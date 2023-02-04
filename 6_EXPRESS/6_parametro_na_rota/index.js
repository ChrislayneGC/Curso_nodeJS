//Conseguiu extrair o parâmetro da URL e a gente condicionou a ROTA a uma forma dinâmica de acessá-la, pelo parâmetro que é enviado depois da base.

//Conseguimos atrelar oque veio na URL com que eu vou resgatar do banco. Então assim eu conseguiria puxar dados específicos ou até fazer uma busca no sistema para entregar para o usuário o resultado final.

const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)

// ANTES DA "/" 
app.get('/users/:id', (req, res) => { //ID: identificador unico dos registros no banco de dados.
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`) //Leitura da tabela users, resgatando um usuário do banco.
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})

// Vamos criar em cima da "/". Porque? A barra se a gente criar anteriormente as outras, tudo o que a gente acesso tem barra no começo, entao ele vai cair nela.Então pra gente desviar disso a gente cria as outras URLs acima da URL principal.