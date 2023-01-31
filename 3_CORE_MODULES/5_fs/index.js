//Renderizar HTML
//Aqui a grande diferença é que ele não mandou só um texto ele não mandou só um H1, ele mandou um READ que eu posso colocar uma TAG, TITLE, posso colocar um arquivo de CCS depois, as tags que o HTML também julga ser necessário para a boa execução da página.

const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})