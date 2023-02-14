const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'fuvest01', {
  host: 'localhost',
  user: 'root',
  password: 'fuvest01',
  dialect: 'mysql', 
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
  
} catch (error) {
  console.error('Não foi possível conectar: ', error)
}

exports.default = sequelize