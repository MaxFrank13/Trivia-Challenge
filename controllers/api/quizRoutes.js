const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, User, Game, Comment, GameDetail } = require('../../models');
const withAuth = require('../../utils/auth');

// GET the quiz of the day for a given category and difficulty from our database
router.get('/:category_id/:difficulty_id', withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findOne({
      include: [
        {
          model: QuizQuestion,
          attributes: {
            exclude: ['quiz_id'],
          },
          include: [
            {
              model: QuizAnswers,
              attributes: {
                exclude: ['question_id'],
              },
            },
          ],
        },
      ],
      where: {
        category_id: req.params.category_id,
        difficulty_id: req.params.difficulty_id,
        // type_id: req.params.type_id
      },
      order: [['date_created', 'DESC']],
    });

    const quiz = await quizData.get({ plain: true });

    //  ****

    // CHECK to see if user has done this quiz already

    // const gameData = await Game.findOne({
    //   where: {
    //     quiz_id: quiz.id,
    //     user_id: req.session.user_id,
    //   }
    // });

    // const game = await gameData.get({ plain: true });

    // if (game) {
    //   // alert('You have already taken this quiz for today');
    //   res.render('profile');
    //   return;
    // };

    // ****

    // res.status(200).json(quiz);

    res.render('quiz', {
      ...quiz,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(400).json(err);
  };
});

// GET comment data for a quiz by its id with game details for the author of each comment (can be used to display how each commenter scored on the quiz being discussed)

router.get('/:id', async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: {
            exclude: ['quiz_id', 'user_id'],
          },
          include: [
            {
              model: User,
              attributes: ['id', 'user_name'],
              include: [
                {
                  model: Game,
                  attributes: {
                    exclude: ['quiz_id', 'user_id']
                  },
                  include:
                  {
                    model: GameDetail,
                    attributes: ['id'],
                    include: [
                      {
                        model: QuizQuestion,
                        attributes: {
                          exclude: ['quiz_id'],
                        },
                      },
                      {
                        model: QuizAnswers,
                        attributes: {
                          exclude: ['question_id'],
                        },
                      },
                    ],
                  },
                  where: {
                    quiz_id: req.params.id,
                  },
                },
              ]
            },
          ],
        },
      ],
    });

    const quiz = quizData.get({ plain: true });

    // res.status(200).json(quiz);

    res.render('leaderboard', {
      ...quiz,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
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

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;