
// EXTERNO
const minimist = require("minimist")


// INTERNO
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //somar dois inteiros
const b = parseInt(args['b'])

soma(a, b) 
// Meu programa resgata 2 argumentos A e B e posso passar 2 numeros que 
// vao ser interpretados como inteiros e repassados a minha funcao soma 
// e me entregar o resultado.