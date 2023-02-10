const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', { //Criando a variavel junto com a instancia E passa as informacoes base.
  host: 'localhost',//Qual banco eu quero integrar
  user: 'root',
  password: 'fuvest01',
  dialect: 'mysql', 
})

try { //Conectar ou gerar um erro
  sequelize.authenticate() //Autenticando a conexão
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize