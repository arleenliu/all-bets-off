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
    members: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'users'
    }],
    challenges: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'challenges',
        required: true,
    }]
});

module.exports = mongoose.model('groups', GroupSchema);