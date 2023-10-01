// routes/startup.js
const express = require('express');
const router = express.Router();
const startupController = require('../controllers/Startup');

// Create a new startup profile
router.post('/create', startupController.createStartupProfile);

// Retrieve a specific startup's profile
router.get('/:id', startupController.getStartupProfile);

// Update a startup's profile information
router.put('/:id/update', startupController.updateStartupProfile);

// Connect with an investor
router.post('/:id/connect/investor', startupController.connectWithInvestor);

// Connect with an incubator
router.post('/startups/:startupId/connect/incubator/:incubatorId', startupController.connectWithIncubator);

// Access resources
router.get('/startups/:startupId/resources', startupController.accessResources);


module.exports = router;
