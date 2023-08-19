const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
        },
        username:{
            type: String,
            required: true,
        },
        reactions: [Reactions],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

ThoughtSchema.virtual('reactionCount')
.get(function(){
return this.reactions.length;
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;