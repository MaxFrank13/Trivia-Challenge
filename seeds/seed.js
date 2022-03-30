const sequelize = require('../config/connection');
const { User, Role, Game, Comment, Categories, Types, Difficulties, Quiz, QuizQuestion, QuizAnswers } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Role.create({ id: 1, role: 'player' });
  await Role.create({ id: 2, role: 'administrator' });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
