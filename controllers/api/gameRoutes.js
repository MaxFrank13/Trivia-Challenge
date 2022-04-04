const router = require('express').Router();
const { Quiz, QuizQuestion, QuizAnswers, Categories, User, Difficulties, Game, GameDetail } = require('../../models');
const withAuth = require('../../utils/auth');

// GET wrong answers for a game of the active user
router.get('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: GameDetail,
          include: [
            {
              model: QuizQuestion,
            },
            {
              model: QuizAnswers,
              where: {
                correct_yn: false,
              }
            },
          ],
        },
      ],
    });

    const game = gameData.get({ plain: true });

    const wrongAnswers = game.gamedetails.map(detail => 
      ({
        question_id: detail.question_id,
        question: detail.quiz_question.question_text,
        answer_id: detail.answer_id,
        answer: detail.quiz_answer.quiz_answer
      })
      );

    res.status(200).json(wrongAnswers);

  } catch(err) {
    res.status(500).json(err);
  };
});

// POST for each answer; get ids from user input
router.post('/answer/:id', withAuth, async (req, res) => {
  try {
    const newGameDetail = await GameDetail.create({
      // ...req.body = {
        // game_id: from FE
        // quiz_id: from FE
        // question_id: from FE
      // }
      answer_id: req.params.id,
    });

    res.status(200).json(newGameDetail);

  } catch(err) {
    res.status(500).json(err);
  };
});

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
