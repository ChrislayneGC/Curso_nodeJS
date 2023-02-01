const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(stats.isFile()) //É um arquivo
    console.log(stats.isDirectory()) //É um diretório
    console.log(stats.isSymbolicLink()) //É um link simbólico
    console.log(stats.ctime) //Data de criação 
    console.log(stats.size) //Tamanho do arquivos
})