const Contact = require('../models/contact');

// Create a new contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single contact by ID
const getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a contact by ID
const updateContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a contact by ID
const deleteContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndRemove(id);
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Search Contacts
const searchContacts = async (req, res) => {
    try {
      const { queryParam } = req.query;
      
      // Example logic: Search for contacts by name or company
      const searchResults = await Contact.find({
        $or: [
          { name: { $regex: queryParam, $options: 'i' } }, // Case-insensitive search by name
          { company: { $regex: queryParam, $options: 'i' } }, // Case-insensitive search by company
        ],
      });
  
      res.json(searchResults);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Sort Contacts
  const sortContacts = async (req, res) => {
    try {
      const { criteria } = req.params;
      
      // Example logic: Sort contacts by a specified field (e.g., name or company)
      const sortedContacts = await Contact.find().sort({ [criteria]: 1 });
  
      res.json(sortedContacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Pagination
  const paginateContacts = async (req, res) => {
    try {
      const { page } = req.params;
      const perPage = 10; // Set the number of contacts per page
  
      // Example logic: Paginate contacts
      const paginatedContacts = await Contact.find()
        .skip((page - 1) * perPage)
        .limit(perPage);
  
      res.json(paginatedContacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Filter Contacts
  const filterContacts = async (req, res) => {
    try {
      const { category } = req.query;
      
      // Example logic: Filter contacts by a specified category (e.g., customer or vendor)
      const filteredContacts = await Contact.find({ category });
  
      res.json(filteredContacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Bulk Operations (Delete Contacts)
  const bulkDeleteContacts = async (req, res) => {
    try {
      const { contactIds } = req.body;
  
      // Example logic: Bulk delete contacts by their IDs
      await Contact.deleteMany({ _id: { $in: contactIds } });
  
      res.json({ message: 'Contacts deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Export Contacts
  const exportContacts = async (req, res) => {
    try {
      // Example logic: Export contacts data as a CSV file
      const contacts = await Contact.find();
      const csvData = contacts.map((contact) => {
        return `${contact.name},${contact.company},${contact.email},${contact.phone}`;
      }).join('\n');
  
      res.attachment('contacts-export.csv'); // Set the filename and content type
      res.send(csvData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = {
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
};
