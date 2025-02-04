const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Message = sequelize.define("Message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Message;
