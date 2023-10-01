const User = require('../models/User');
const Startup = require('../models/Startup');
const ReportedContent = require('../models/ReportedContent');
const Notification = require('../models/Notification');

// View a list of all user accounts
exports.viewUserAccounts = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update user account information
exports.updateUserAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a user account
exports.deleteUserAccount = async (req, res) => {
    try {
        const { id } = req.params;

        // Perform user account deletion (handle cascade deletes as needed)
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(204).send(); // Respond with no content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// View pending startup profiles for approval
exports.viewPendingStartups = async (req, res) => {
    try {
        const pendingStartups = await Startup.find({ status: 'pending' });

        res.status(200).json(pendingStartups);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Approve a pending startup profile
exports.approveStartup = async (req, res) => {
    try {
        const { id } = req.params;

        const startupToApprove = await Startup.findByIdAndUpdate(
            id,
            { status: 'approved' },
            { new: true }
        );

        if (!startupToApprove) {
            return res.status(404).json({ error: 'Startup not found' });
        }

        res.status(200).json(startupToApprove);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Reject a pending startup profile
exports.rejectStartup = async (req, res) => {
    try {
        const { id } = req.params;

        const startupToReject = await Startup.findByIdAndUpdate(
            id,
            { status: 'rejected' },
            { new: true }
        );

        if (!startupToReject) {
            return res.status(404).json({ error: 'Startup not found' });
        }

        res.status(200).json(startupToReject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// View reported content for moderation
exports.viewReportedContent = async (req, res) => {
    try {
        const reportedContent = await ReportedContent.find();

        res.status(200).json(reportedContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Approve reported content
exports.approveReportedContent = async (req, res) => {
    try {
        const { id } = req.params;

        const contentToApprove = await ReportedContent.findByIdAndUpdate(
            id,
            { status: 'approved' },
            { new: true }
        );

        if (!contentToApprove) {
            return res.status(404).json({ error: 'Reported content not found' });
        }

        res.status(200).json(contentToApprove);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Reject reported content
exports.rejectReportedContent = async (req, res) => {
    try {
        const { id } = req.params;

        const contentToReject = await ReportedContent.findByIdAndUpdate(
            id,
            { status: 'rejected' },
            { new: true }
        );

        if (!contentToReject) {
            return res.status(404).json({ error: 'Reported content not found' });
        }

        res.status(200).json(contentToReject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Send system-wide notifications to users
exports.sendNotifications = async (req, res) => {
    try {
        const { message, recipients } = req.body;

        // Logic to send notifications to specified recipients

        res.status(200).json({ message: 'Notifications sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
