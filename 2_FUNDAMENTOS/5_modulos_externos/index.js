//Modulos externos = Pegar argumentos que posso extrair na linha de comando
//Modulo

const minimist = require ("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao)

console.log(`O nome dela e ${nome} e a profissao dela e ${profissao}`)