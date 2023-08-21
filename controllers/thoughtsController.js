const { User, Thoughts } = require('../models');

module.exports = {

    async createThought(req, res) {
        // console.log(req.body)
        try {
            const thought = await Thoughts.create(req.body);
            console.log(thought);
            const user = await User.findByIdAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            )

            if (!user) {
                return res.status(404).json({
                  message: 'Video created, but found no user with that ID',
                });
              }
        
              res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getAllThoughts(req,res){
        try {
            const thoughts = await Thoughts.find()
            .select('-__v'); //ignores the version field
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addReaction(req,res){
        try {
            const thought = await Thoughts.findByIdAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {new: true}
            )
            console.log(thought);
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    async deleteReaction(req,res){
        try {
            const thought = await Thoughts.findByIdAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            )
            console.log(thought);
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    async editThought(req, res){
        try {
            console.log(req.params)
            const update = await Thoughts.findByIdAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            )

            console.log(update);

            res.json(update)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleThought(req, res){
        try {
            const thought = await Thoughts.findById(req.params.thoughtId);

            res.json(thought)
        } catch (error) {
            res.status(500).json(error);  
        }
    },
    async deleteAll(req,res){   //deletes all thoughts
        try {
            const deleteThoughts = await Thoughts.deleteMany();
            res.json(deleteThoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteSinglethought(req,res){
        console.log(req.params)
        try {
            const deleteThought = await Thoughts.findByIdAndDelete(req.params.thoughtId);
            res.json(deleteThought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

}