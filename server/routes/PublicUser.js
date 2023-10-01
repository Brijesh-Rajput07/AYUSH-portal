const express = require('express');
const router = express.Router();
const publicUserController = require('../controllers/PublicUser');


// Create a new public user profile
router.post('/', publicUserController.createPublicUser);

// Get a list of all public users
router.get('/', publicUserController.getAllPublicUsers);

// Get a public user profile by ID
router.get('/:publicUserId', publicUserController.getPublicUserById);

// Update a public user profile by ID
router.put('/:publicUserId', publicUserController.updatePublicUser);

// Delete a public user profile by ID
router.delete('/:publicUserId', publicUserController.deletePublicUser);

module.exports = router;
