const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    challengeId: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    groupId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Array,
        required: true,
    },
    notes: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);