// Cairá nesse erro quando o arquivo não existir 
const fs = require('fs')

fs.unlink('arquivo.txt', function(err) {
    if (err) {
        console.log(err)
        return
    }

    console.log('Arquivo removido!')
})

//Geralmente é bom evidenciar o erro para o usuário, criando um log por exemplo.