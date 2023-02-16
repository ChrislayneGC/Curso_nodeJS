const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING, // Nome
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING, // Email
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING, // Senha
    allowNull: false,
  },
});

module.exports = User;