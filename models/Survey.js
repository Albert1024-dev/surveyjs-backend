const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // References the User model
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    location: {
        country: String,
        region: String,
        city: String,
        lat: Number,
        lng: Number
    },
    talkingResult: {
        type: Object,
        required: true
    },
    totalResult: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('surveys', SurveySchema);
