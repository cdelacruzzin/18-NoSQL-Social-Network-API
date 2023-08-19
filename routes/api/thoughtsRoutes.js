const router = require('express').Router();

const {
    createThought
} = require('../../controllers/thoughtsController');

router.route('/:userId').post(createThought);

module.exports = router;