const { Comment } = require('../models');

const seedData = [
  {
    "comment_text": "This is a test comment",
    "quiz_id": 1,
    "user_id": 1,
  },
  {
    "comment_text": "This is another test comment",
    "quiz_id": 1,
    "user_id": 2,
  },
];

const seedComments = () => Comment.bulkCreate(seedData);

module.exports = seedComments;
