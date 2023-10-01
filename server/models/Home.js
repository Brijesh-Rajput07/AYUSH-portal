// Import mongoose
const mongoose = require('mongoose');

// Define schema for Home Section
const homeSchema = new mongoose.Schema({
    title: { type: String, },
    description: { type: String, },
    featuredStartups: [{
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        founders: {
            type: [String]
        },
        fundingAmount: {
            type: String,
        },
        location: {
            type: String,
        },
    }],
});

module.exports = mongoose.model('Home', homeSchema);

