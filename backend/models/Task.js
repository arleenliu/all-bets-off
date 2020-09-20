const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    challengeId: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'challenges',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'groups',
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