const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define(
  'user',
  {
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
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async function (user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      },
    },
  }
);

(async () => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
})()

module.exports = User;
