const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
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