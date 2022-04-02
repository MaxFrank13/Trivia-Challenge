const router = require('express').Router();
const { Quiz, GameDetail, Game, Categories, User, Difficulties } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all scores for a user

router.get('/', async (req, res) => {
  try {
    const scoreData = await Game.findAll({
      attributes: ['game_score'],
      where: {
        user_id: req.session.user_id,
      }
    });

    const scores = scoreData.map(score => score.get({ plain: true }));

    res.status(200).json(scores);

  } catch(err) {
    res.status(500).json(err);
  };
});

// GET all scores by a category and difficulty
router.get('/:category_id/:difficulty_id', async (req, res) => {
  try {
    const scoreData = await Quiz.findAll({
      include: [
        {
          model: Game,
          attributes: ['game_score'],
          order: [['game_score', 'DESC']]
        }
      ],
      where: {
        category_id: req.params.category_id,
        difficulty_id: req.params.difficulty_id
      }
    });

    const scores = scoreData.map(score => score.get({ plain: true }));

    res.status(200).json(scores);

  } catch(err) {
    res.status(500).json(err);
  };
});

module.exports = router;