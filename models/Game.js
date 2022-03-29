const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}
// a user's individal game

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: id
      }
    },
    questions_answered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    correct_answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    wrong_answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    game_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;
