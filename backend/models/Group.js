const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        required: false, // only required for private groups.
    },
    challenges: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('groups', GroupSchema);