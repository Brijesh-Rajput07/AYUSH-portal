const PublicUser = require('../models/publicUser');

// Create a new public user profile
exports.createPublicUser = async (req, res) => {
    try {
        const userData = req.body;
        const publicUser = new PublicUser(userData);
        await publicUser.save();
        res.status(201).json(publicUser);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create public user profile' });
    }
};

// Get a list of all public users
exports.getAllPublicUsers = async (req, res) => {
    try {
        const publicUsers = await PublicUser.find();
        res.json(publicUsers);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch public users' });
    }
};

// Get a public user profile by ID
exports.getPublicUserById = async (req, res) => {
    const { publicUserId } = req.params;
    try {
        const publicUser = await PublicUser.findById(publicUserId);
        if (!publicUser) {
            return res.status(404).json({ error: 'Public user not found' });
        }
        res.json(publicUser);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch public user' });
    }
};

// Update a public user profile by ID
exports.updatePublicUser = async (req, res) => {
    const { publicUserId } = req.params;
    const updatedData = req.body;

    try {
        const publicUser = await PublicUser.findByIdAndUpdate(publicUserId, updatedData, { new: true });
        if (!publicUser) {
            return res.status(404).json({ error: 'Public user not found' });
        }
        res.json(publicUser);
    } catch (error) {
        res.status(500).json({ error: 'Unable to update public user profile' });
    }
};

// Delete a public user profile by ID
exports.deletePublicUser = async (req, res) => {
    const { publicUserId } = req.params;
    try {
        const deletedPublicUser = await PublicUser.findByIdAndRemove(publicUserId);
        if (!deletedPublicUser) {
            return res.status(404).json({ error: 'Public user not found' });
        }
        res.json(deletedPublicUser);
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete public user profile' });
    }
};
