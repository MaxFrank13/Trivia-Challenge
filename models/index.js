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

Role.hasOne(User, {
    foreignKey: 'role_id',
});

User.belongsTo(Role, {
    foreignKey: 'role_id',
    key: 'id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    key: 'id',
});

Quiz.hasMany(Comment, {
  foreignKey: 'quiz_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    key: 'id',
});

Categories.hasMany(Quiz, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

Quiz.belongsTo(Categories, {
    foreignKey: 'category_id',
    key: 'id',
});

Types.hasMany(Quiz, {
  foreignKey: 'type_id',
  onDelete: 'SET NULL',
});

Quiz.belongsTo(Types, {
  foreignKey: 'type_id',
  key: 'id',
});

Difficulties.hasMany(Quiz, {
  foreignKey: 'difficulty_id',
  onDelete: 'SET NULL',
});

Quiz.belongsTo(Difficulties, {
  foreignKey: 'difficulty_id',
  key: 'id',
});

Quiz.hasMany(QuizQuestion, {
  foreignKey: 'quiz_id',
  onDelete: 'CASCADE',
});

QuizQuestion.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  key: 'id',
});

QuizQuestion.hasMany(QuizAnswers, {
  foreignKey: 'question_id',
  onDelete: 'CASCADE',
});

QuizAnswers.belongsTo(QuizQuestion, {
  foreignKey: 'question_id',
  key: 'id',
});

User.hasMany(Game, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Game.belongsTo(User, {
      foreignKey: 'user_id',
      key: 'id',
  });

Quiz.hasMany(Game, {
  foreignKey: 'quiz_id',
  onDelete: 'SET NULL',
});

Game.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  key: 'id',
});

Game.hasMany(GameDetail, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE',
});

GameDetail.belongsTo(Game, {
    foreignKey: 'game_id',
    key: 'id',
});

QuizQuestion.hasMany(GameDetail, {
    foreignKey: 'question_id',
    onDelete: 'SET NULL',
});

GameDetail.belongsTo(QuizQuestion, {
    foreignKey: 'question_id',
    key: 'id',
});

QuizAnswers.hasMany(GameDetail, {
    foreignKey: 'answer_id',
    onDelete: 'SET NULL'
});

GameDetail.belongsTo(QuizAnswers, {
    foreignKey: 'answer_id',
    key: 'id',
}),

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
