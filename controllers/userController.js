const User = require('../models/User');
module.exports = {

    async getUsers(req, res){
        try {
            const users = await User.find();
        } catch (error) {
            res.status(500).json(error);
        }
    }




}
