const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuizAnswers extends Model {}
// an answer for a quiz question

QuizAnswers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quiz_question',
        key: 'id'
      }
    },
    quiz_answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct_yn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'quiz_answers',
  }
);

module.exports = QuizAnswers;
