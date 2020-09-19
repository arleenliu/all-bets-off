const mongoose = require('mongoose');

const ChallengeSchema = mongoose.Schema({
    group_id: {
        type: String,
        required: true,
    },
    challenge_name: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    end_condition: {
        type: Number,
        required: true,
    },
    completed: {
        type: Array,
        required: true,
    },
    prize: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('series', ChallengeSchema);