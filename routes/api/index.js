const router = require('express').Router();
const userRoutes = require('./userRoures');
const thoughtRoutes = require('./thoughtsRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);
module.exports = router;