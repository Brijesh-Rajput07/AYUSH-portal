const express = require('express');
const router = express.Router();
const adminController = require('../controllers/Admin');

// View a list of all user accounts
router.get('/users', adminController.viewUserAccounts);

// Update user account information
router.put('/users/:id/update', adminController.updateUserAccount);

// Delete a user account
router.delete('/users/:id/delete', adminController.deleteUserAccount);

// View pending startup profiles for approval
router.get('/startups/pending', adminController.viewPendingStartups);

// Approve a pending startup profile
router.put('/startups/:id/approve', adminController.approveStartup);

// Reject a pending startup profile
router.put('/startups/:id/reject', adminController.rejectStartup);

// View reported content for moderation
router.get('/content/reports', adminController.viewReportedContent);

// Approve reported content
router.put('/content/:id/approve', adminController.approveReportedContent);

// Reject reported content
router.put('/content/:id/reject', adminController.rejectReportedContent);

// Send system-wide notifications to users
router.post('/notifications/send', adminController.sendNotifications);

module.exports = router;
