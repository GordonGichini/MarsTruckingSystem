const express = require('express');
const router = express.Router();
const {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddressById,
  deleteAddressById,
  searchAddresses,
  sortAddresses,
  paginateAddresses,
  filterAddresses,
  bulkDeleteAddresses,
  exportAddresses,
} = require('../controllers/addressBookController');

// Define routes for CRUD operations
router.route('/').post(createAddress).get(getAllAddresses);
router.route('/:id').get(getAddressById).put(updateAddressById).delete(deleteAddressById);

// Search Addresses
router.get('/search', searchAddresses);

// Sort Addresses
router.get('/sort/:criteria', sortAddresses);

// Pagination
router.get('/page/:page', paginateAddresses);

// Filter Addresses
router.get('/filter', filterAddresses);

// Bulk Operations
router.post('/bulk/delete', bulkDeleteAddresses);

// Export Addresses
router.get('/export', exportAddresses);



module.exports = router;
