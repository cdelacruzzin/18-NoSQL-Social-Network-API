const {Schema, model} = require('mongoose');
const { isEmail } = require('validator'); //imports email validator


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [isEmail, 'Not a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount')
.get(function (){
    return this.friends.length
})

const User = model('user', userSchema);