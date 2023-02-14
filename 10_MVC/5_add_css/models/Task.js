const { DataTypes } = require('sequelize') //Importar os tipos de dados

const db = require('../db/conn') //Conexão

const Task = db.define('Task', { 
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Task