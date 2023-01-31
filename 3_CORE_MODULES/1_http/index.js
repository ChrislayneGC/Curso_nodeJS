// Aqui é o nosso primeiro exemplo de servidor web, de aplicação web com Node puro e não precisou de nada, apenas do Node para gerar uma simples aplicação web.

const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.write('Oi HTTP')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})