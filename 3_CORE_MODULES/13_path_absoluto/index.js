// Foi unido oque foi digitado com o que veio de variáveis, dados dinâmicos do sistema. Dois métodos métodos super importantes.

const path = require('path')

//Path absoluto (O caminho exato)
console.log(path.resolve('teste.txt'))

//Formar um path
const midFolder = 'relatorios'
const fileName = 'chris.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)