const { GameDetail } = require('../models');

const seedData = [
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 1,
    "answer_id": 1,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 2,
    "answer_id": 2,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 3,
    "answer_id": 4,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 4,
    "answer_id": 3,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 5,
    "answer_id": 1,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 6,
    "answer_id": 2,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 7,
    "answer_id": 1,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 8,
    "answer_id": 1,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 9,
    "answer_id": 4,
  },
  {
    "game_id": 1,
    "quiz_id": 1,
    "question_id": 10,
    "answer_id": 1,
  },

];

const seedGameDetail = () => GameDetail.bulkCreate(seedData);

module.exports = seedGameDetail;
