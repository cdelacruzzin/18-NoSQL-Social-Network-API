const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    deleteAll,
    deleteSingle
} = require('../../controllers/thoughtsController');

router.route('/').delete(deleteAll);
router.route('/:userId').post(createThought).get(getAllThoughts);
router.route('/:userId/:thoughtId').delete(deleteSingle);
module.exports = router;