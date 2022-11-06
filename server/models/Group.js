const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        location: {
            type: String,
            required: true,
        },
        short_description: {
            type: String,
            required: true
        },
        description: {
            type: TEXT,
            required: true
        },
        time: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const Group = model('Group', groupSchema);

module.exports = Group;