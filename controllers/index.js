const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const quizRoutes = require('./quizRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/score', scoreRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;
