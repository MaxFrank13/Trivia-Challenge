const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const scoreRoutes = require('./scoreRoutes');
const gameRoutes = require('./gameRoutes');
const formRoutes = require('./formRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/game', gameRoutes);
router.use('/score', scoreRoutes);
router.use('/form', formRoutes);

module.exports = router;
