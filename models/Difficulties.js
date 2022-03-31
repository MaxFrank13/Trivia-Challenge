const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Difficulties extends Model {}
// lookup of quiz difficulties from api

Difficulties.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    difficulty_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'difficulties',
  }
);

module.exports = Difficulties;
