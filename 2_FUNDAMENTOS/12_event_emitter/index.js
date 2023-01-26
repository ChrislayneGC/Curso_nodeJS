//Mas percebam o que eu posso atrelar a algum evento global, em alguma etapa do meu código. por exemplo para criar um Log caso dê o erro. Então eu tenho essa possibilidade que criar eventos customizados para minha aplicação Node.

const EventEmitter = require('events')
const eventEmitter = new EventEmitter() // Convencao vertilizada que vai instanciar o modulo que é uma classe (EventEmitter).

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start')

console.log('Depois')