const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    deleteAll
} = require('../../controllers/thoughtsController');

router.route('/:userId').delete(deleteAll).post(createThought).get(getAllThoughts);

module.exports = router;