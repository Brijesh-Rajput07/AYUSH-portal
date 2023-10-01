const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
    tags: [String],
});

module.exports = mongoose.model('SuccessStory', successStorySchema);
