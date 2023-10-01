// models/GovernmentAgency.js
const mongoose = require('mongoose');

const governmentAgencySchema = new mongoose.Schema({
    name: String,
    contact_info: {
        address: String,
        phone: String,
        email: String,
        website: String,
    },
    regulatory_info: String,
    reports_publications: [String],
    resources: [String],
    initiatives: [String],
});

module.exports = mongoose.model('GovernmentAgency', governmentAgencySchema);
