// models/PublicUser.js
const mongoose = require('mongoose');

const publicUserSchema = new mongoose.Schema({
    name: String,
    email: String,
});

module.exports = mongoose.model('PublicUser', publicUserSchema);
