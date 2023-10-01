const mongoose = require('mongoose');

const reportedContentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who reported the content
        required: true,
    },
    status: {
        type: String,
        enum: ['reported', 'approved', 'rejected'],
        default: 'reported',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('ReportedContent', reportedContentSchema);
