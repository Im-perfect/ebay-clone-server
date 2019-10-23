const Sequelize = require("sequelize");
const db = require("../db");

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
    type: Sequelize.STRING,
  },
  phone: {
      type: Sequelize.STRING
  }
});

module.exports = Ad;