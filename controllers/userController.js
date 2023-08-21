const User = require('../models/User');
module.exports = {

    async getUsers(req, res){
        try {
            const users = await User.find()
            .populate('thoughts') //populates the user with the thoughts
           .populate('friends');
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async createUser(req,res){  // creates a user
        try {
            const user = await User.create(req.body);

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser(req, res){  //gets a single user by id
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
    async addFriend(req,res){  
        console.log(req.params);
        console.log(req.body);
        try {
            const friend = await User.findByIdAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends:req.body}},
                {new:true}
            )
            console.log(friend);
            res.json(friend);
        } catch (error) {
            res.status(500).json(error); 
        }
    },
    async removeFriend(req, res){
        try {
            
        } catch (error) {
            res.status(500).json(error); 
        }
    }
}
