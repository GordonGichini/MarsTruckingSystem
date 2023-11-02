const express = require('express');
const router = express.Router();
const addressBookController = require('../controllers/addressBookController')


// Define routes for CRUD operations
router.post('/', addressBookController.createAddress)

router.get('/', addressBookController.getAllAddresses);

router.get('/:id', addressBookController.getAddressById);

router.put('/:id', addressBookController.updateAddressById);


router.delete('/:id', addressBookController.deleteAddressById);

// Search Addresses
router.get('/search', addressBookController.searchAddresses);

// Sort Addresses
router.get('/sort/:criteria', addressBookController.sortAddresses);

// Pagination
router.get('/page/:page', addressBookController.paginateAddresses);

// Filter Addresses
router.get('/filter', addressBookController.filterAddresses);

// Bulk Operations
router.post('/bulk/delete', addressBookController.bulkDeleteAddresses);

// Export Addresses
router.get('/export', addressBookController.exportAddresses);



module.exports = router;
