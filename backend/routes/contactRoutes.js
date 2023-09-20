const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
  searchContacts,
  sortContacts,
  paginateContacts,
  filterContacts,
  bulkDeleteContacts,
  exportContacts,
} = require('../controllers/contactController');

// Define routes for CRUD operations
router.route('/contacts').post(createContact).get(getAllContacts);
router.route('/contacts/:id').get(getContactById).put(updateContactById).delete(deleteContactById);

// Search Contacts
router.get('/contacts/search', searchContacts);

// Sort Contacts
router.get('/contacts/sort/:criteria', sortContacts);

// Pagination
router.get('/contacts/page/:page', paginateContacts);

// Filter Contacts
router.get('/contacts/filter', filterContacts);

// Bulk Operations
router.post('/contacts/bulk/delete', bulkDeleteContacts);

// Export Contacts
router.get('/contacts/export', exportContacts);



module.exports = router;
