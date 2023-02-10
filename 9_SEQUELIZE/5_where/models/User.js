const { DataTypes } = require('sequelize') //Propriedade que da acesso a todos os tipos de dados que tenho no banco

const db = require('../db/conn') //Chamando a conexão do banco porque eu vou ter uma operacao com o banco aqui tbm.

const User = db.define('User', { //Define o Model
  name: { //Nome do model
    type: DataTypes.STRING,
    allowNull: false, //Determinar que nao pode ser Nulo.
  },
  occupation: { //Profissao do usuário
    type: DataTypes.STRING,
    required: true  //Não pode ser vazio
  },
  newsletter: { //Quero saber se ele aceitou ou não (True or False)
    type: DataTypes.BOOLEAN,
  },
})

module.exports = User