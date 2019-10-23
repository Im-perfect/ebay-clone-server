const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("ebay_user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;