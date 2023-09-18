const User = require('../models/User');
module.exports = {

    async getUsers(req, res) {
        try {
            const users = await User.find()
                .populate('thoughts') //populates the user with the thoughts
                .populate('friends');
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async createUser(req, res) {  // creates a user
        try {
            const user = await User.create(req.body);

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteAllUser(req, res) {
        try {
            const deleteUser = await User.deleteMany();
            res.json(deleteUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteOneUser(req, res) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.userId);
            res.json(deleteUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async updateUser(req, res) {
        try {
            console.log(req.body)
            const update = await User.findByIdAndUpdate(
                req.params.userId,
                {$set: req.body},
                {new:true, runValidators: true}
            )
            res.json(update)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser(req, res) {  //gets a single user by id
        try {
            console.log(req.params);
            const user = await User.findById(req.params.userId)
                .populate('thoughts'); //populates the user with the thoughts
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //adds friend to userId in params.
    //adds an objectId to the friends field in User model
    async addFriend(req, res) {
        console.log(req.params);
        console.log(req.body);
        try {
            const friend = await User.findByIdAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body } },
                { new: true }
            )
            console.log(friend);
            res.json(friend);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async removeFriend(req, res) {
        try {
            console.log(req.params);
            console.log(req.body);
            const removeFriend = await User.findByIdAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            )

            res.json(removeFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
