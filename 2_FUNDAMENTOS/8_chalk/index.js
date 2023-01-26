const chalk = require('chalk')

const nota = 7

if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns! Voce está aprovado!'))
} else {
    console.log(chalk.bgRed.black('Voce precisa fazer a prova de recuperação!'))
} // Altera a propriedade da fonte
