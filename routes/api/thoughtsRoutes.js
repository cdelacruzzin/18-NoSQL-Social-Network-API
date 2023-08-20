const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    addReaction,
    editThought,
    getSingleThought,
    deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts);
router.route('/:userId').post(createThought);
router.route('/id/:thoughtId').put(editThought).get(getSingleThought).post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
module.exports = router;