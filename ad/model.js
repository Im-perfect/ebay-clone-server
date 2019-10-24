const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Ad = db.define("ad", {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});

Ad.belongsTo(User);

module.exports = Ad;
