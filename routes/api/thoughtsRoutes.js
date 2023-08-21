const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    addReaction,
    editThought,
    getSingleThought,
    deleteReaction,
    deleteSinglethought,

} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(createThought);

router.route('/id/:thoughtId').put(editThought).get(getSingleThought).delete(deleteSinglethought);

router.route('/:thoughtId/reactions/').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;