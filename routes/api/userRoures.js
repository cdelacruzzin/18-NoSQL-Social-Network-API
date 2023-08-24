const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    addFriend,
    removeFriend,
deleteAllUser,
deleteOneUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/delete').delete(deleteAllUser);
router.route('/:userId').get(getSingleUser).delete(deleteOneUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;