const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    recipients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the users who will receive the notification
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Notification', notificationSchema);
