const { Schema, model } = require('mongoose');

const churchSchema = new Schema(
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
            unique: true
        },
        denomination: {
            type: String,
            required: true,
            unique: false
        },
        mission: {
            type: TEXT,
            required: true,
        }
    }
);

const Church = model('Church', churchSchema);

module.exports = Church;