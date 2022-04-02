const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
// const scoreRoutes = require('./scoreRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/game', gameRoutes);
// router.use('/score', scoreRoutes);

module.exports = router;
