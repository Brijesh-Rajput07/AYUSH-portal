const express = require('express');
const router = express.Router();
const incubatorController = require('../controllers/Incubators');
// Create a new Incubator
router.post('/', incubatorController.createIncubator);

// Retrieve a list of Incubators
router.get('/', incubatorController.getAllIncubators);

// Retrieve details of a specific Incubator
router.get('/:id', incubatorController.getIncubatorById);

// Update an Incubator's profile
router.put('/:id', incubatorController.updateIncubator);

// Delete an Incubator
router.delete('/:id', incubatorController.deleteIncubator);

module.exports = router;
