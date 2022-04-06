const router = require('express').Router();
const { Quiz, GameDetail, Game, Comment, Categories, User, Difficulties, Types, QuizQuestion, QuizAnswers } = require('../models');
const withAuth = require('../utils/auth');

// GET all scores and game details of the active user
router.get('/', withAuth, async (req, res) => {
  try {
    const scoreData = await Game.findAll({
      attributes: {
        exclude: ['user_id', 'quiz_id'],
      },
      include: [
        {
          model: User,
          attributes: ['id', 'user_name'],
        },
        {
          model: Quiz,
          attributes:
          {
            exclude: ['category_id', 'difficulty_id', 'type_id'],
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
          // attributes: ['id'],
          include: [
            {
              model: QuizQuestion,
              attributes: {
                exclude: ['quiz_id'],
              }
            },
            {
              model: QuizAnswers,
              // attributes: {
              //   exclude: ['question_id'],
              // },
            },
          ],
        },
      ],
      order: [['game_score', 'DESC']],
      where: {
        user_id: req.session.user_id,
      }
    });

    const scores = scoreData.map(score => score.get({ plain: true }));

    // res.status(200).json(scores);

    res.render('leaderboard', {
      scores,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  };
});

// GET all scores and game details of latest quiz by category and difficulty
router.get('/:category_id/:difficulty_id', async (req, res) => {
  try {
    const scoreData = await Quiz.findOne({
      include: [
        {
          model: Game,
          attributes: ['game_score'],
          include: [
            {
              model: User,
              attributes: ['user_name']
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
      where: {
        category_id: req.params.category_id,
        difficulty_id: req.params.difficulty_id
      }
    });

    const scores = scoreData.get({ plain: true });

    const { date_created } = scores;

    const scoreHistory = scores.games.map(game => {
      return {
        score: game.game_score,
        user_name: game.user.user_name
      }
    }).sort((a, b) => a - b);

    res.status(200).json({
      scores,
      date_created,
      scoreHistory,
    });

    // res.render('leaderboard', {
    //   logged_in: req.session.logged_in,
    //   date_created,
    //   scoreHistory,
    // });

  } catch (err) {
    res.status(500).json(err);
  };
});

// GET all scores and game details
router.get('/all', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: {
        exclude: ['quiz_id']
      },
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Quiz,
          attributes: {
            exclude: ['category_id', 'difficulty_id', 'type_id'],
          },
          include: [

            {
              model: Comment,
              attributes: ['id', 'comment_text']
            },
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

    // res.status(200).json(games);

    res.render('leaderboard', {
      games,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;