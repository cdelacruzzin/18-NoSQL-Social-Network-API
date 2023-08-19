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

            // console.log(user);
         
            
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
    async deleteAll(req,res){   //deletes all thoughts
        try {
            const deleteThoughts = await Thoughts.deleteMany();
            res.json(deleteThoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteSingle(req,res){
        console.log(req.params)
        try {
            const deleteThought = await Thoughts.findByIdAndDelete(req.params.thoughtId);
            res.json(deleteThought);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}