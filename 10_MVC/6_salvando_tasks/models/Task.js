const { DataTypes } = require('sequelize') //Importar os tipos de dados

const db = require('../db/conn') //Conexão

const Task = db.define('Task', { 
  title: {
    type: DataTypes.STRING, //Incluir 
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING, //Incluir 
  },
  done: {
    type: DataTypes.BOOLEAN, //Incluir Manualmente
  },
})

module.exports = Task