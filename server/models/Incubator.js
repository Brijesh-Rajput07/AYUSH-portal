// models/Incubator.js
const mongoose = require('mongoose');

const incubatorSchema = new mongoose.Schema({
    name: String,
    contact: String,
    areasOfExpertise: [String],
    programDetails: {
        duration: String,
        servicesOffered: [String],
    },
});

module.exports = mongoose.model('Incubator', incubatorSchema);
