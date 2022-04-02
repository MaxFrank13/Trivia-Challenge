const router = require('express').Router();
const { Quiz, GameDetail, Game, Categories, User, Difficulties } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all scores for a user
router.get('/', withAuth, async (req, res) => {
  try {
    const scoreData = await Game.findAll({
      attributes: ['game_score'],
      order: [['game_score', 'DESC']],
      where: {
        user_id: 1,
        // user_id: req.session.user_id,
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
          ],
          order: [['game_score', 'DESC']]
        }
      ],
      where: {
        category_id: req.params.category_id,
        difficulty_id: req.params.difficulty_id
      }
    });

    const scores = scoreData.get({ plain: true });
    
    // const {user_name} = scores.games.user; 

    const scoreHistory = scores.games.map(score => score.game_score).sort((a,b) => a - b);

    res.status(200).json({
      scores,
      scoreHistory
    });

    // res.render('leaderboard');

  } catch(err) {
    res.status(500).json(err);
  };
});

module.exports = router;