const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User') //Model que vai ser representado por essa relacao

const Address = db.define('Address', { //Model de Address
  street: { //Nome da rua
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: { //Numero da casa
    type: DataTypes.STRING,
  },
  city: { //Cidade
    type: DataTypes.STRING,
  },
})

Address.belongsTo(User) //1 Endereço pertence a 1 Usuário

module.exports = Address