const { QuizAnswers } = require('../models');

const seedData =[
    {
        "question_id": 1,
        "quiz_answer": "Economics",
        "correct_yn": true,
    },
    {
        "question_id": 1,
        "quiz_answer": "Philosophy",
        "correct_yn": false,
    },
    {
        "question_id": 1,
        "quiz_answer": "Politics",
        "correct_yn": false,
    },
    {
        "question_id": 1,
        "quiz_answer": "Physics",
        "correct_yn": false,
    },
    {
        "question_id": 2,
        "quiz_answer": "Hats",
        "correct_yn": true,
    },
    {
        "question_id": 2,
        "quiz_answer": "Shoes",
        "correct_yn": false,
    },
    {
        "question_id": 2,
        "quiz_answer": "Belts",
        "correct_yn": false,
    },
    {
        "question_id": 2,
        "quiz_answer": "Shirts",
        "correct_yn": false,
    },
    {
        "question_id": 3,
        "quiz_answer": "Daniel Ek",
        "correct_yn": true,
    },
    {
        "question_id": 3,
        "quiz_answer": "Sean Parker",
        "correct_yn": false,
    },
    {
        "question_id": 3,
        "quiz_answer": "Felix Miller",
        "correct_yn": false,
    },
    {
        "question_id": 3,
        "quiz_answer": "Michael Breidenbruecker",
        "correct_yn": false,
    },
    {
        "question_id": 4,
        "quiz_answer": "Niagara Mohawk Building",
        "correct_yn": true,
    },
    {
        "question_id": 4,
        "quiz_answer": "Taipei 101",
        "correct_yn": false,
    },
    {
        "question_id": 4,
        "quiz_answer": "One Detroit Center",
        "correct_yn": false,
    },
    {
        "question_id": 4,
        "quiz_answer": "Westendstrasse 1",
        "correct_yn": false,
    },
    {
        "question_id": 5,
        "quiz_answer": "Fiat",
        "correct_yn": true,
    },
    {
        "question_id": 5,
        "quiz_answer": "Maserati",
        "correct_yn": false,
    },
    {
        "question_id": 5,
        "quiz_answer": "Alfa Romeo",
        "correct_yn": false,
    },
    {
        "question_id": 5,
        "quiz_answer": "Ferrari",
        "correct_yn": false,
    },
    {
        "question_id": 6,
        "quiz_answer": "Daigaku",
        "correct_yn": true,
    },
    {
        "question_id": 6,
        "quiz_answer": "Toshokan",
        "correct_yn": false,
    },
    {
        "question_id": 6,
        "quiz_answer": "Jimusho",
        "correct_yn": false,
    },
    {
        "question_id": 6,
        "quiz_answer": "Shokudou",
        "correct_yn": false,
    },
    {
        "question_id": 7,
        "quiz_answer": "Brad&#039;s Drink",
        "correct_yn": true,
    },
    {
        "question_id": 7,
        "quiz_answer": "Pepsin Pop",
        "correct_yn": false,
    },
    {
        "question_id": 7,
        "quiz_answer": "Carolina Cola",
        "correct_yn": false,
    },
    {
        "question_id": 7,
        "quiz_answer": "Pepsin Syrup",
        "correct_yn": false,
    },
    {
        "question_id": 8,
        "quiz_answer": "South America",
        "correct_yn": true,
    },
    {
        "question_id": 8,
        "quiz_answer": "Hawaii",
        "correct_yn": false,
    },
    {
        "question_id": 8,
        "quiz_answer": "Europe",
        "correct_yn": false,
    },
    {
        "question_id": 8,
        "quiz_answer": "Asia",
        "correct_yn": false,
    },
    {
        "question_id": 9,
        "quiz_answer": "Belgium",
        "correct_yn": true,
    },
    {
        "question_id": 9,
        "quiz_answer": "Netherlands",
        "correct_yn": false,
    },
    {
        "question_id": 9,
        "quiz_answer": "France",
        "correct_yn": false,
    },
    {
        "question_id": 9,
        "quiz_answer": "USA",
        "correct_yn": false,
    },
    {
        "question_id": 10,
        "quiz_answer": "World War II",
        "correct_yn": true,
    },
    {
        "question_id": 10,
        "quiz_answer": "Vietnam War",
        "correct_yn": false,
    },
    {
        "question_id": 10,
        "quiz_answer": "American Civil War",
        "correct_yn": false,
    },
    {
        "question_id": 10,
        "quiz_answer": "American Revolutionary War",
        "correct_yn": false,
    },
];

const seedQuizAnswers = () => QuizAnswers.bulkCreate(seedData);

module.exports = seedQuizAnswers;
