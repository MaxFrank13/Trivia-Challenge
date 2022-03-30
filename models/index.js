const User = require('./User');
const Role = require('./Role');
const Comment = require('./Comment');
const Game = require('./Game');
const Quiz = require('./Quiz');
const Categories = require('./Categories');
const Types = require('./Types');
const Difficulties = require('./Difficulties');
const QuizQuestion = require('./QuizQuestion');
const QuizAnswers = require('./QuizAnswers');

// User.hasOne(Role, {
//   foreignKey: 'role_id',
// });

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Game, {
//   foreignKey: 'game_id'
// });

// Game.hasMany(Comment, {
//   foreignKey: 'game_id',
//   onDelete: 'CASCADE'
// });

// Quiz.hasOne(Categories, {
//   foreignKey: 'category_id',
//   onDelete: 'SET NULL',
// });

// Quiz.hasOne(Types, {
//   foreignKey: 'type_id',
//   onDelete: 'SET NULL',
// });

// Quiz.hasOne(Difficulties, {
//   foreignKey: 'difficulty_id',
//   onDelete: 'SET NULL',
// });

// QuizQuestion.belongsTo(Quiz, {
//   foreignKey: 'quiz_id'
// });

// Quiz.hasMany(QuizQuestion, {
//   foreignKey: 'quiz_id',
//   onDelete: 'CASCADE',
// });

// QuizAnswers.belongsTo(QuizQuestion, {
//   foreignKey: 'question_id'
// });

// QuizQuestion.hasMany(QuizAnswers, {
//   foreignKey: 'question_id',
//   onDelete: 'CASCADE',
// });

module.exports = { User, Role, Game, Comment, Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers };
