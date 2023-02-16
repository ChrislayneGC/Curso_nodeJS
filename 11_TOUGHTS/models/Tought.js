const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("../models/User");

const Tought = db.define("Tought", { //Chamando tought
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

Tought.belongsTo(User); //Perterce a um usuário (belongsTo)
User.hasMany(Tought); //Um usuario tem varios pensamentos (hasMany)

module.exports = Tought;