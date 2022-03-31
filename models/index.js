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
const GameDetail = require('./GameDetail');

// User.hasMany(Game, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Quiz.hasMany(Comment, {
//   foreignKey: 'quiz_id',
//   onDelete: 'SET NULL'
// });

// Quiz.hasOne(Categories, {
//   foreignKey: 'category_id',
//   onDelete: 'SET NULL',
// });

// Categories.belongsTo(Quiz, {
//   foreignKey: 'category_id'
// });

// Quiz.hasOne(Types, {
//   foreignKey: 'type_id',
//   onDelete: 'SET NULL',
// });

// Types.belongsTo(Quiz, {
//   foreignKey: 'type_id'
// });

// Quiz.hasOne(Difficulties, {
//   foreignKey: 'difficulty_id',
//   onDelete: 'SET NULL',
// });

// Difficulties.belongsTo(Quiz, {
//   foreignKey: 'difficulty_id'
// });

// Quiz.hasMany(QuizQuestion, {
//   foreignKey: 'quiz_id',
//   onDelete: 'CASCADE',
// });

// QuizQuestion.belongsTo(Quiz, {
//   foreignKey: 'quiz_id'
// });

// QuizQuestion.hasMany(QuizAnswers, {
//   foreignKey: 'question_id',
//   onDelete: 'CASCADE',
// });

// QuizAnswers.belongsTo(QuizQuestion, {
//   foreignKey: 'question_id'
// });

// Quiz.hasMany(Game, {
//   foreignKey: 'quiz_id',
//   onDelete: 'SET NULL'
// });

// Game.belongsTo(Quiz, {
//   foreignKey: 'quiz_id',
// });

// Game.hasMany(GameDetail, {
//   foreignKey: 'game_id',
//   onDelete: 'CASCADE',
// });

// GameDetail.belongsToMany(QuizQuestion, {
//   through: Quiz,
//   uniqueKey: false,
//   onDelete: 'CASCADE',
// });

// QuizQuestion.belongsToMany(GameDetail, {
//   through: Quiz,
//   uniqueKey: false,
//   onDelete: 'CASCADE',
// });

// GameDetail.belongsToMany(QuizAnswers, {
//   through: Quiz,
//   uniqueKey: false,
//   onDelete: 'CASCADE',
// });

// QuizAnswers.belongsToMany(GameDetail, {
//   through: Quiz,
//   uniqueKey: false,
//   onDelete: 'CASCADE',
// });

module.exports = {  User, Role, Game, Comment, Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers, GameDetail };
