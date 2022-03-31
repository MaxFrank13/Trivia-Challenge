const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, Categories, User, Difficulties } = require('../../models');
const withAuth = require('../../utils/auth');

// GET the General Knowledge quiz of the day from our database
router.get('/:category_id/:difficulty_id', withAuth, async (req,res) => {
  try {
    const quizData = await Quiz.findOne({
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
      where: {
        category_id: req.params.category_id,
        difficulty_id: req.params.difficulty_id,
      },
      order: [['date_created', 'DESC']],
    });

    const quiz = quizData.get({ plain: true });

    res.render('quiz', {
      ...quiz,
      logged_in: req.session.logged_in,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// GET data for a quiz by its id

router.get('/:id', withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['user_name']
            }
          ],
          where: {
            quiz_id: req.params.id
          },
        }
    ],
    });

    const quiz = quizData.get({ plain: true });

    res.render('leaderboard', {
      ...quiz,
      logged_in: req.session.logged_in,
    });

  } catch(err) {
    res.status(500).json(err);
  };
});

// POST new comments

router.post('/comments/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      quiz_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);

  } catch(err) {
    res.status(500).json(err);
  };
});

module.exports = router;