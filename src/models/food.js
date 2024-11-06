const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Food = sequelize.define('foods', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  protein: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carb: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Food;
