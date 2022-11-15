const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']    
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        friends: [
            {
                type: Schema.tYPES.ObjectId,
                REF: 'User'
            }
        ]
        churches: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Church'
            }
        ],
        smallGroups: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SmallGroup'
            }
        ],
        groups: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Group'
            }
        ],
    }
);

module.exports = User;