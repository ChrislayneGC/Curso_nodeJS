// Então ele tem uma mudança na ordem de execução onde o Node não espera a minha função ser finalizada. Ele vai executando o resto do código síncrono enquanto o assincrono roda em paralelo.

const fs = require("fs")

console.log("Início")

fs.writeFile("arquivo.txt", "oi", function (err) {
    setTimeout(function () {
        console.log("Arquivo criado!")
    }, 1000)
})

console.log ("Fim")

// Então quando não dependo de uma resposta, por exemplo sempre que um usuário acessar uma área do sistema quero gravar um log. Eu não preciso esperar gravar esse log par o usuário estar lá recebendo a sua resposta então vou gravar esse log de forma assíncrona e vou entregar minha resposta para o usuário. É uma utilização assincrona e ele consegue deixar mais fluido a aplicação quando a gente não depende realmente em todas as respostas para seguir com ela.