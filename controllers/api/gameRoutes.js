const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, Categories, User, Difficulties, Game } = require('../../models');
const withAuth = require('../../utils/auth');

// GET games from previous days
router.get('/all', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [
        {
          model: Quiz,
          include: [
            {
              model: QuizQuestion
            },
            {
              model: QuizAnswers
            },
            {
              model: Categories,
            },
            {
              model: Difficulties,
            },
          ],
        },
      ],
      where: {
        user_id: req.session.user_id
      },
    });

    const games = gameData.map(game => game.get({ plain: true }));

    res.render('leaderboard', {
      games,
      logged_in: req.session.logged_in,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// POST a user's game result

// GET all scores for a 