const sequelize = require('../config/connection');
const { User, Role, Game, Comment, Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers } = require('../models');

const userData = require('./userData.json');
const seedCategories = require('./categoryData');
const seedQuiz = require('./quizData');
const seedQuizQuestions = require('./quizQuestionsData');
const seedQuizAnswers = require('./quizAnswersData');
const seedComments = require('./commentData');
const seedGame = require('./gameData');
const seedGameDetail = require('./gameDetailData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await Role.create({ id: 1, role: 'player' });
  await Role.create({ id: 2, role: 'administrator' });
  console.log('\n----- ROLES SYNCED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USER SYNCED -----\n');

  await Types.create({ type_name: 'easy' });
  await Types.create({ type_name: 'medium' });
  await Types.create({ type_name: 'hard' });
  console.log('\n----- TYPES SYNCED -----\n');

  await Difficulties.create({ difficulty_name: 'multiple' });
  await Difficulties.create({ difficulty_name: 'boolean' });
  console.log('\n----- DIFFICULTIES SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedQuiz();
  console.log('\n----- QUIZ SEEDED -----\n');

  await seedQuizQuestions();
  console.log('\n----- QUIZ QUESTIONS SEEDED -----\n');

  await seedQuizAnswers();
  console.log('\n----- QUIZ ANSWERS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
