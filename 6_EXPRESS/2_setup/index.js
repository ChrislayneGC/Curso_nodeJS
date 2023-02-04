// Então quer dizer que se eu acessar no navegador na porta:3000 do localhost que é o nosso servidor local. Ele vai mostrar esse texto aqui porque essa é a funcionalidade que está criando na rota Barra.

const express = require('express')
const app = express() //Variavel APP, executando o express
const port = 3000 //Definir uma porta 

app.get('/', (req, res) => { //Criando a Rota. REQUISICAO: Quando recebe um dado, vai vir pela REQ. RESPOSTA: Oque a gente envia para o usuário.

    res.send('Olá Mundo!!') //SEND método do Express
}) 

app.listen(port, () => { //LISTEN = puxar a porta definida.
    console.log(`App rodando na porta:${port}`)
})