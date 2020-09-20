const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    groups: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('tasks', TaskSchema);