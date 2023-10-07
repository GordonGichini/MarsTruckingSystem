const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const router = express.Router();

// Create a new invoice
router.post('/', invoiceController.createInvoice);

// Fetch all expenses
router.get('/', invoiceController.getAllInvoices);

// Fetch a single expense by ID
router.get('/:id', invoiceController.getInvoiceById);

// Update an expense by ID
router.put('/:id', invoiceController.updateInvoice);

// Delete an expense by ID
router.delete('/:id', invoiceController.deleteInvoice);


module.exports = router;