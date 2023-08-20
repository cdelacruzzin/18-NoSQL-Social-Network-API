const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,        //Use Mongoose's ObjectId data type
            default: () => new Types.ObjectId(),    //Default value is set to a new ObjectId
            
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    }, 
    {
        toJSON: {
            getters: true,
        },
        id: false,
        _id:false,
    }
);

module.exports = reactionSchema;