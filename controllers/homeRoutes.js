const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, Categories, User, Difficulties, Game, GameDetail, Types } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage and display login if not logged in; get scores and game details from all-time
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: {
        exclude: ['quiz_id']
      },
      include: [
        {
          model: Quiz,
          attributes: {
            exclude: ['category_id', 'difficulty_id', 'type_id'],
          },
          include: [
            {
              model: Categories,
            },
            {
              model: Difficulties,
            },
          ],
        },
        {
          model: GameDetail,
          attributes: ['id'],
          include: [
            {
              model: QuizQuestion,
              attributes: {
                exclude: ['quiz_id'],
              }
            },
            {
              model: QuizAnswers,
              attributes: {
                exclude: ['question_id'],
              },
            },
          ],
        },
      ],
      order: [['game_score', 'DESC']],
    });

    const games = gameData.map(game => game.get({ plain: true }));

    // res.status(200).json({
    //   games,
    //   logged_in: true
    // });

    res.render('homepage', {
      logged_in: req.session.logged_in,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// GET profile for user if logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(1, {
      attributes: ['id', 'user_name', 'photo'],
      include: [
        {
          model: Game,
          attributes: {
            exclude: ['quiz_id', 'user_id'],
          },
          include: [
            {
              model: Quiz,
              attributes: {
                exclude: ['category_id', 'difficulty_id', 'type_id']
              },
              include: [
                {
                  model: Categories,
                },
                {
                  model: Difficulties,
                },
                {
                  model: Types,
                },
              ],
            },
            {
              model: GameDetail,
              attributes: ['id'],
              include: [
                {
                  model: QuizQuestion,
                  attributes: {
                    exclude: ['quiz_id'],
                  }
                },
                {
                  model: QuizAnswers,
                  attributes: {
                    exclude: ['question_id'],
                  },
                },
              ],
            },
          ],
        },
      ],
    });

    const user = userData.get({ plain: true });

    // res.status(200).json(user);

    res.render('profile', {
      user,
      logged_in: req.session.logged_in,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// path to a login page if the user is not already logged in
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/profile');
		return;
	}

	res.render('login');
})

module.exports = router;