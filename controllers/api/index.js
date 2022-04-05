const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const formRoutes = require('./formRoutes');

router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/form', formRoutes);

module.exports = router;
