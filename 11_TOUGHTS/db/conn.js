const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'fuvest01', {
    host: 'localhost',
    user: 'root',
    password: 'fuvest01',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch(err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize