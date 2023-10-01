const Startup = require('../models/Startup');

// Create a new startup profile
exports.createStartupProfile = async (req, res) => {
    try {
        const newStartup = new Startup(req.body);
        const savedStartup = await newStartup.save();
        res.status(201).json(savedStartup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Retrieve a specific startup's profile by ID
exports.getStartupProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const startup = await Startup.findById(id);

        if (!startup) {
            return res.status(404).json({ error: 'Startup not found' });
        }

        res.status(200).json(startup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a startup's profile by ID
exports.updateStartupProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedStartup = await Startup.findByIdAndUpdate(id, updatedData, {
            new: true,
        });

        if (!updatedStartup) {
            return res.status(404).json({ error: 'Startup not found' });
        }

        res.status(200).json(updatedStartup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Connect with an investor by ID
exports.connectWithInvestor = async (req, res) => {
    try {
        const startup = await Startup.findById(startupId);
        const investor = await Investor.findById(investorId);

        if (!startup || !investor) {
            res.status(404).json({ error: 'Startup or investor not found' });
            return;
        }

        // Add the investor to the connectedInvestors array of the startup
        startup.connectedInvestors.push(investorId);
        await startup.save();

        res.json(startup);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.connectWithIncubator = async (req, res) => {

    const { startupId, incubatorId } = req.params;
    try {
        // Check if the startup and incubator exist
        const startup = await Startup.findById(startupId);
        const incubator = await Incubator.findById(incubatorId);

        if (!startup || !incubator) {
            res.status(404).json({ error: 'Startup or incubator not found' });
            return;
        }
        // Add the incubator to the connectedIncubators array of the startup
        startup.connectedIncubators.push(incubatorId);
        await startup.save();

        res.status(200).json(startup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


// Access resources by ID
exports.accessResources = async (req, res) => {

    const { startupId } = req.params;

    try {
        // Fetch the startup from the database (You may implement a similar check as before)
        const startup = await Startup.findById(startupId);

        if (!startup) {
            res.status(404).json({ error: 'Startup not found' });
            return;
        }
        // Check if the user is authorized to access resources (e.g., role-based access)
        // For simplicity, we assume all startups have access.
        // In a real-world scenario, you would implement proper authorization.
        const authorized = true;

        if (!authorized) {
            res.status(403).json({ error: 'Access denied' });
            return;
        }
        // Return the resources associated with the startup
        const resources = startup.resources || [];
        res.status(200).json(resources);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
