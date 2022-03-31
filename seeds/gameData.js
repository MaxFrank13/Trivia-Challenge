const { Game } = require('../models');

const seedData = [
  {
    "quiz_id": 1,
    "questions_answered": 10,
    "correct_answers": 5,
    "wrong_answers": 5,
    "game_score": 50,
    "user_id": 1,
  },
];

const seedGame = () => Game.bulkCreate(seedData);

module.exports = seedGame;
