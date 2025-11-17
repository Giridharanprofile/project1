const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
        primaryKey: true
    },
    created_at: {
        type: Datetime,
        default: Date.now,
    },
    updated_at: {
        type: Datetime,
        default: Date.now,
    },
    name: {
        type: String(20),
        required: true
    },
    description : String(100),
    mimeType: {
        type: Number,
        enum : ['image/jpeg', 'image/png', 'image/jpg'],
    },
    media_metadata: {
        type: JSON,
        width : Number,
        height : Number,
        photoUrl : {
            type: String,
            required: true

        }

    },
})

module.exports = mongoose.model('Photo', photoSchema);