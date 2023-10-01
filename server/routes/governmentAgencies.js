// routes/government.js
const express = require('express');
const router = express.Router();
const GovernmentAgencyController = require('../controllers/governmentAgency');

// Define routes and associate them with controller functions
router.post('/government-agencies', GovernmentAgencyController.createGovernmentAgency);
router.get('/government-agencies', GovernmentAgencyController.getAllGovernmentAgencies);
router.get('/government-agencies/:id', GovernmentAgencyController.getGovernmentAgencyById);
router.put('/government-agencies/:id', GovernmentAgencyController.updateGovernmentAgency);
router.delete('/government-agencies/:id', GovernmentAgencyController.deleteGovernmentAgency);

module.exports = router;
