const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: Number,
        required: true,
    },
    customInvoiceNumber: {
        type: Number,
        required: false,
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    remitTo: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true
    }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;