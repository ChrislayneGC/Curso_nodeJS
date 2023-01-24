// Pode criar scripts que executam algo no sistema
// Que criam um arquivo com conteudo.

// NOME
console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].split("=")[1]
console.log(nome)


// IDADE
const idade = args[1].split("=")[1]
console.log(idade)

console.log ('O nome dele e ${nome} e ele tem ${idade} anos!')