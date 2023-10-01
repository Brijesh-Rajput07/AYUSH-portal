// routes/investor.js
const express = require('express');
const router = express.Router();
const investorController = require('../controllers/Investor');


// Create a new investor profile
router.post('/', investorController.createInvestor);

// Get a list of all investors
router.get('/', investorController.getAllInvestors);

// Get an investor profile by ID
router.get('/:investorId', investorController.getInvestorById);

// Update an investor profile by ID
router.put('/:investorId', investorController.updateInvestor);

// Delete an investor profile by ID
router.delete('/:investorId', investorController.deleteInvestor);

module.exports = router;


module.exports = router;
