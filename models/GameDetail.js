const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Quiz = require('./Quiz');
const QuizAnswers = require('./QuizAnswers');
const QuizQuestion = require('./QuizQuestion');

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
      // references: {
      //   model: 'game',
      //   key: 'id',
      //   onDelete: 'CASCADE',
      // }
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Quiz,
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: QuizQuestion,
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: QuizAnswers,
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gamedetail',
  }
);

module.exports = GameDetail;
