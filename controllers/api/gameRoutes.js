const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, Categories, User, Difficulties, Game } = require('../../models');
const withAuth = require('../../utils/auth');

// GET the wrong answers for a game


// GET games from previous days
router.get('/all', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [
        {
          model: Quiz,
          include: [
            {
              model: QuizQuestion,
              include: [
                {
                  model: QuizAnswers
                },
              ],
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
        user_id: 1,
      },
    });

    const games = gameData.map(game => game.get({ plain: true }));

    res.status(200).json(games);

    res.render('leaderboard', {
      games,
      logged_in: 1,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// POST for each answer; get ids from user input


// POST a user's game result
router.post('/', withAuth, async (req, res) => {
  try {
    const newGame = await Game.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newGame);
  } catch(err) {
    res.status(500).json(err);
  };
});

module.exports = router;
