const http = require("http")
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true) //Então quando a requisição chegar aqui a gente vai chamar o módulo URL e vamos pasear a URL que vem pela requisição que é um dos atributos que tem nessa função. E esse parâmetro TRUE aqui é para ele funcionar corretamente para o nosso exemplo aqui.
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if (!name) {
        res.end(
            '<h1>Preencha o seu nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar"></form>'
        )
    } else {
        res.end(`<h1>Seja bem-vindo(a) ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})