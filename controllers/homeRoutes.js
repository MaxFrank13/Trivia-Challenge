const router = require('express').Router();
const { Game, User, Quiz, Categories, Difficulties } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage and display login if not logged in
router.get('/', async (req, res) => {
  try {
    const scoreData = await Game.findAll({
      attributes: ['game_score'],
      order: [['game_score', 'DESC']]
    });
  
    const scores = scoreData.map(score => score.get({ plain: true }));
  
    res.status(200).json(scores);

    res.render('homepage');

  } catch(err) {
    res.status(500).json(err);
  };
});

// GET profile for user if logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Game,
          include: [
            {
              model: Quiz,
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
    });

    const user = userData.get({ plain: true });

    res.render('profile');

  } catch(err) {

  };
});

module.exports = router;