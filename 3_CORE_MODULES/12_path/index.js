const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

console.log(path.dirname(customPath)) //Nome do diretório
console.log(path.basename(customPath)) //Nome do arquivo
console.log(path.extname(customPath)) //Nome da extensão