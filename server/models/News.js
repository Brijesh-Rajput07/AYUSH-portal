const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
    category: String,
});

module.exports = mongoose.model('News', newsSchema);
