const { User, Thought } = require('../models');

module.exports = {

    async createThought(req, res) {
        try {
            const user = await User.findById(req.params.userId);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}