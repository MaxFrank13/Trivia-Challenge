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

Role.hasOne(User, {
  foreignKey: 'role_id',
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Quiz.hasMany(Game, {
  foreignKey: 'quiz_id',
  onDelete: 'SET NULL'
});

Game.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
});

User.hasMany(Game, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Game.belongsTo(User, {
  foreignKey: 'user_id',
});

Game.hasMany(Comment, {
  foreignKey: 'game_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Game, {
  foreignKey: 'game_id'
});

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

Quiz.hasMany(QuizQuestion, {
  foreignKey: 'quiz_id',
  onDelete: 'CASCADE',
});

QuizQuestion.belongsTo(Quiz, {
  foreignKey: 'quiz_id'
});

QuizQuestion.hasMany(QuizAnswers, {
  foreignKey: 'question_id',
  onDelete: 'CASCADE',
});

QuizAnswers.belongsTo(QuizQuestion, {
  foreignKey: 'question_id'
});

module.exports = { User, Role, Game, Comment, Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers };
