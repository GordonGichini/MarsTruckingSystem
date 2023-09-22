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
router.route('/addresses').post(createAddress).get(getAllAddresses);
router.route('/addresses/:id').get(getAddressById).put(updateAddressById).delete(deleteAddressById);

// Search Addresses
router.get('/addresses/search', searchAddresses);

// Sort Addresses
router.get('/addresses/sort/:criteria', sortAddresses);

// Pagination
router.get('/addresses/page/:page', paginateAddresses);

// Filter Addresses
router.get('/addresses/filter', filterAddresses);

// Bulk Operations
router.post('/addresses/bulk/delete', bulkDeleteAddresses);

// Export Addresses
router.get('/addresses/export', exportAddresses);



module.exports = router;
