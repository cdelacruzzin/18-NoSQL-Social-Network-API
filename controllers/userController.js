const User = require('../models/User');
module.exports = {

    async getUsers(req, res){
        try {
            const users = await User.find()
            .populate('thoughts'); //populates the user with the thoughts
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async createUser(req,res){
        try {
            const user = await User.create(req.body);

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser(req, res){
        try {
            console.log(req.params);
            const user = await User.findById(req.params.userId)
            .populate('thoughts'); //populates the user with the thoughts
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
