const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contactInformation: {
        email: String,
        phone: String,
        // Add other contact fields as needed
    },
    investmentPreferences: {
        sectors: [String],
        fundingRange: {
            min: Number,
            max: Number,
        },
    },
    previousInvestments: [{
        startupName: String,
        investmentAmount: Number,
    }],
});

const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;
