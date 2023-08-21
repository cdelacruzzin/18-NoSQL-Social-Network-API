const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    addFriend,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends').post(addFriend)

module.exports = router;