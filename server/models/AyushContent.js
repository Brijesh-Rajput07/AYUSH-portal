const mongoose = require('mongoose');

const ayushContentSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
    category: String,
});

module.exports = mongoose.model('AyushContent', ayushContentSchema);
