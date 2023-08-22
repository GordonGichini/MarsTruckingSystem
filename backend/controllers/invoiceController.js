const Invoice = require('../models/invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const {
      invoiceNumber,
      customInvoiceNumber,
      invoiceDate,
      remitTo,
      note,
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newInvoice = new Invoice({
      invoiceNumber,
      customInvoiceNumber,
      invoiceDate,
      remitTo,
      note,
      // Add other fields as needed
    });

    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ error: 'An error occurred while creating invoice' });
  }
};

// Fetch all invoices
exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'An error occurred while fetching invoices' });
  }
};

// Fetch a single invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    const invoice = await Invoice.findById(invoiceId);
    
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    console.error('Error fetching invoice:', error);
    res.status(500).json({ error: 'An error occurred while fetching the invoice' });
  }
};

// Update an invoice by ID
exports.updateInvoice = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    const updatedData = req.body;
    
    const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, updatedData, { new: true });

    if (!updatedInvoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(200).json(updatedInvoice);
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({ error: 'An error occurred while updating the invoice' });
  }
};

// Delete an invoice by ID
exports.deleteInvoice = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    
    const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId);

    if (!deletedInvoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error('Error deleting invoice:', error);
    res.status(500).json({ error: 'An error occurred while deleting the invoice' });
  }
};

