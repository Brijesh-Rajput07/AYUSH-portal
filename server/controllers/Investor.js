const mongoose = require('mongoose');
const Investor = require('../models/Investor');

// Create a new investor profile
exports.createInvestor = async (req, res) => {
    try {
        const investorData = req.body;
        const investor = new Investor(investorData);
        await investor.save();
        res.status(201).json(investor);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create investor profile' });
    }
};

// Get a list of all investors
exports.getAllInvestors = async (req, res) => {
    try {
        const investors = await Investor.find();
        res.json(investors);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch investors' });
    }
};

// Get an investor profile by ID
exports.getInvestorById = async (req, res) => {
    const { investorId } = req.params;
    try {
        const investor = await Investor.findById(investorId);
        if (!investor) {
            return res.status(404).json({ error: 'Investor not found' });
        }
        res.json(investor);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch investor' });
    }
};

// Update an investor profile by ID
exports.updateInvestor = async (req, res) => {
    const { investorId } = req.params;
    const updatedData = req.body;

    try {
        const investor = await Investor.findByIdAndUpdate(investorId, updatedData, { new: true });
        if (!investor) {
            return res.status(404).json({ error: 'Investor not found' });
        }
        res.json(investor);
    } catch (error) {
        res.status(500).json({ error: 'Unable to update investor profile' });
    }
};

// Delete an investor profile by ID
exports.deleteInvestor = async (req, res) => {
    const { investorId } = req.params;
    try {
        const deletedInvestor = await Investor.findByIdAndRemove(investorId);
        if (!deletedInvestor) {
            return res.status(404).json({ error: 'Investor not found' });
        }
        res.json(deletedInvestor);
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete investor profile' });
    }
};
