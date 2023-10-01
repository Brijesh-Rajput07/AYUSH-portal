const mongoose = require('mongoose');
const GovernmentAgency = require('../models/GovernmentAgency');
// Controller functions
// Create a new government agency
exports.createGovernmentAgency = async (req, res) => {
    try {
        const newAgency = new GovernmentAgency(req.body);
        const savedAgency = await newAgency.save();
        res.status(201).json(savedAgency);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the government agency' });
    }
};

// Get all government agencies
exports.getAllGovernmentAgencies = async (req, res) => {
    try {
        const agencies = await GovernmentAgency.find();
        res.json(agencies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve government agencies' });
    }
};

// Get a government agency by ID
exports.getGovernmentAgencyById = async (req, res) => {
    const agencyId = req.params.id;

    try {
        const agency = await GovernmentAgency.findById(agencyId);
        if (!agency) {
            res.status(404).json({ message: 'Government agency not found' });
        } else {
            res.json(agency);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the government agency' });
    }
};

// Update a government agency by ID
exports.updateGovernmentAgency = async (req, res) => {
    const agencyId = req.params.id;

    try {
        const updatedAgency = await GovernmentAgency.findByIdAndUpdate(
            agencyId,
            req.body,
            { new: true }
        );

        if (!updatedAgency) {
            res.status(404).json({ message: 'Government agency not found' });
        } else {
            res.json(updatedAgency);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the government agency' });
    }
};

// Delete a government agency by ID
exports.deleteGovernmentAgency = async (req, res) => {
    const agencyId = req.params.id;

    try {
        const deletedAgency = await GovernmentAgency.findByIdAndDelete(agencyId);

        if (!deletedAgency) {
            res.status(404).json({ message: 'Government agency not found' });
        } else {
            res.json(deletedAgency);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the government agency' });
    }
};


// Delete a Government Agency
exports.deleteAgency = async (req, res) => {
    try {
        const deletedAgency = await GovernmentAgency.findByIdAndRemove(req.params.id);

        if (!deletedAgency) {
            return res.status(404).json({ error: 'Government Agency not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
