
const Incubator = require('../models/Incubator');

// Create a new Incubator
exports.createIncubator = async (req, res) => {
    try {
        const { name, contact, areasOfExpertise, programDetails } = req.body;

        const newIncubator = new Incubator({
            name,
            contact,
            areasOfExpertise,
            programDetails,
        });

        await newIncubator.save();

        res.status(201).json(newIncubator);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Retrieve a list of Incubators
exports.getAllIncubators = async (req, res) => {
    try {
        const incubators = await Incubator.find();
        res.status(200).json(incubators);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Retrieve details of a specific Incubator
exports.getIncubatorById = async (req, res) => {
    try {
        const incubator = await Incubator.findById(req.params.id);
        if (!incubator) {
            return res.status(404).json({ error: 'Incubator not found' });
        }
        res.status(200).json(incubator);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an Incubator's profile
exports.updateIncubator = async (req, res) => {
    try {
        const { name, contact, areasOfExpertise, programDetails } = req.body;

        const updatedIncubator = await Incubator.findByIdAndUpdate(
            req.params.id,
            {
                name,
                contact,
                areasOfExpertise,
                programDetails,
            },
            { new: true }
        );

        if (!updatedIncubator) {
            return res.status(404).json({ error: 'Incubator not found' });
        }

        res.status(200).json(updatedIncubator);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an Incubator
exports.deleteIncubator = async (req, res) => {
    try {
        const deletedIncubator = await Incubator.findByIdAndRemove(req.params.id);

        if (!deletedIncubator) {
            return res.status(404).json({ error: 'Incubator not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
