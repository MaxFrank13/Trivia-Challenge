const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Quiz = require('./Quiz');
const QuizAnswers = require('./QuizAnswers');

class GameDetail extends Model {}
// a user's individal game

GameDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Quiz,
        key: 'id'
      }
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: QuizAnswers,
        key: 'id'
      }
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

module.exports = GameDetail;
