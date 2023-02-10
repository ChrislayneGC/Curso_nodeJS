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

User.hasMany(Address) 
Address.belongsTo(User)

module.exports = Address