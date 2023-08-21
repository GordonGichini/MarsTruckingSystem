const express = require('express');
const companyProfileController = require('../controllers/companyProfileController');
const router = express.Router();

// Create a company profile
router.post('/create', companyProfileController.createCompanyProfile);

// Fetch company profile
router.get('/get', companyProfileController.getCompanyProfile);

// Fetch a companyprofile by ID
router.get('/:id', companyProfileController.getCompanyProfileById);

// Update a company profile by ID
router.put('/:id', companyProfileController.updateCompanyProfile);

// Delete a company profile by ID
router.delete('/:id', companyProfileController.deleteCompanyProfile);


module.exports = router;
