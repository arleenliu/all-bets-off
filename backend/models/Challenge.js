const mongoose = require('mongoose');

const ChallengeSchema = mongoose.Schema({
    group_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'groups',
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
        type: Object,
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

module.exports = mongoose.model('challenges', ChallengeSchema);