const { Quiz } = require('../models');

const seedData =[
    {
        "category_id": 1,
        "type_id": 1,
        "difficulty_id": 2,
    },
];

const seedQuiz = () => Quiz.bulkCreate(seedData);

module.exports = seedQuiz;
