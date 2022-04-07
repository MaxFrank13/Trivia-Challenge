const axios = require('axios');
const { Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers } = require('./models');
const quizAPIURL = 'https://opentdb.com/api.php?amount=10';

// get categories
getCategories = async () => {
    const catData = await Categories.findAll({
        attributes: {
            exclude: ['category_name', 'active']
        },
        where: {
            active: true,
        },
    });
    return catData.map(({ id, api_id }) => ({
        id: id,
        api_id: api_id,
    }));
};

// get types
getTypes = async () => {
    const typesData = await Types.findAll({
        attributes: {
            exclude: ['display_name', 'active']
        },
        where: {
            active: true,
        },
    });
    return typesData.map(({ id, type_name }) => ({
        id: id,
        name: type_name,
    }));
};

//  get difficulties
getDifficulties = async () => {
    const diffsData = await Difficulties.findAll({
        attributes: {
            exclude: ['display_name', 'active']
        },
        where: {
            active: true,
        },
    });
    return diffsData.map(({ id, difficulty_name }) => ({
        id: id,
        name: difficulty_name,
    }));
};

saveQuestion = async (quizId, question_text) => {
    // console.log(question_text);
    const newQuestion = await QuizQuestion.create({
        quiz_id: quizId,
        question_text: question_text,
    });
    // console.log(newQuestion.id);
    return newQuestion.id;
}

saveAnswer = async (questionId, answer_text, correct) => {
    // console.log(answer_text);
    const newAnswer = await QuizAnswers.create({
        question_id: questionId,
        quiz_answer: answer_text,
        correct_yn: correct,
    });
    return newAnswer.id;
}

// call api and save quiz, questions, and answers
fetchAndSaveQuizes = async (category, difficulty, type) => {

    try {

        const response = await axios.get(`${quizAPIURL}&category=${category.api_id}&type=${type.name}&difficulty=${difficulty.name}`);
        if (response.data.response_code == 0) {

            for (i = 0; i < response.data.results.length; i++) {
                console.log(response.data.results[i].question.trim().length);
                console.log(response.data.results[i].correct_answer.trim().length);
                console.log(response.data.results[i].incorrect_answers.length);

                if (response.data.results[i].question.trim().length && response.data.results[i].correct_answer.trim().length && response.data.results[i].incorrect_answers.length) {
                    // save quiz
                    const newQuiz = await Quiz.create({
                        category_id: category.id,
                        type_id: type.id,
                        difficulty_id: difficulty.id,
                    });

                    const newQuestionId = await saveQuestion(newQuiz.id, response.data.results[i].question);

                    // save correct answer
                    saveAnswer(newQuestionId, response.data.results[i].correct_answer, true);

                    // save incorrect answers
                    for (x = 0; x < response.data.results[i].incorrect_answers.length; x++) {
                        saveAnswer(newQuestionId, response.data.results[i].incorrect_answers[x], false);
                    }
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
};

const buildQuizes = async () => {
    try {
        // get categories
        const cats = await getCategories();

        // get types
        const types = await getTypes();

        // get difficulties
        const diffs = await getDifficulties();

        // call api for each permutation
        for (a = 0; a < cats.length; a++) {
            // cats.forEach(cat => {

            for (b = 0; b < types.length; b++) {
                // diffs.forEach(diff => {
                for (c = 0; c < diffs.length; c++) {
                    // types.forEach(type => {
                    fetchAndSaveQuizes(cats[a], diffs[c], types[b]);
                }
            }
        }

    } catch (error) {
        console.error(`buildQuizes: ${error}`);
    }
}

buildQuizes();