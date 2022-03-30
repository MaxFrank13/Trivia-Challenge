const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const highscoreRoutes = require('./highscoreRoutes');
const threadRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/game', gameRoutes);
router.use('/highscore', highscoreRoutes);

module.exports = router;
