const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    deleteAll,
    deleteSingle,
    editThought,
    getSingleThought
} = require('../../controllers/thoughtsController');

router.route('/').delete(deleteAll).get(getAllThoughts);
router.route('/:userId').post(createThought);
router.route('/:userId/:thoughtId').delete(deleteSingle).put(editThought).get(getSingleThought);
module.exports = router;