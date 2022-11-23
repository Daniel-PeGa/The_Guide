const { Schema, model } = require('mongoose');

const churchSchema = new Schema(
    {
        churchName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        location: {
            type: String,
            required: false,
            unique: true
        },
        denomination: {
            type: String,
            required: false,
            unique: false,
        },
        mission: {
            type: String,
            required: false,
        },
        churchId: {
            type: String,
            required: false,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const Church = model('Church', churchSchema);

module.exports = Church;