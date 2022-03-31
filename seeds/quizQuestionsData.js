const { QuizQuestion } = require('../models');

const seedData =[
    {
        "quiz_id": 1,
        "question_text": "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
    },
    {
        "quiz_id": 1,
        "question_text": "What does a milliner make and sell?",
    },
    {
        "quiz_id": 1,
        "question_text": "Who is a co-founder of music streaming service Spotify?",
    },
    {
        "quiz_id": 1,
        "question_text": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
    },
    {
        "quiz_id": 1,
        "question_text": "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
    },
    {
        "quiz_id": 1,
        "question_text": "What is the romanized Japanese word for &quot;university&quot;?",
    },
    {
        "quiz_id": 1,
        "question_text": "What was the soft drink Pepsi originally introduced as?",
    },
    {
        "quiz_id": 1,
        "question_text": "Where did the pineapple plant originate?",
    },
    {
        "quiz_id": 1,
        "question_text": "Which country has the most Trappist breweries?",
    },
    {
        "quiz_id": 1,
        "question_text": "Directly between the Washington Monument and the Reflecting Pool is a memorial to which war?",
    }
];

const seedQuizQuestions = () => QuizQuestion.bulkCreate(seedData);

module.exports = seedQuizQuestions;
