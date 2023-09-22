const AddressBook = require('../models/addressBook');

// Create a new address book entry
const createAddress = async (req, res) => {
  try {
    const address = new AddressBook(req.body);
    await address.save();
    res.status(201).json({ success: true, data: address });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all address book entries
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await AddressBook.find();
    res.status(200).json({ success: true, data: addresses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single address book entry by ID
const getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await AddressBook.findById(id);
    if (!address) {
      return res.status(404).json({ success: false, error: 'Address not found' });
    }
    res.status(200).json({ success: true, data: address });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update an address book entry by ID
const updateAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await AddressBook.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!address) {
      return res.status(404).json({ success: false, error: 'Address not found' });
    }
    res.status(200).json({ success: true, data: address });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete an address book entry by ID
const deleteAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await AddressBook.findByIdAndRemove(id);
    if (!address) {
      return res.status(404).json({ success: false, error: 'Address not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Search Address Book Entries
const searchAddresses = async (req, res) => {
    try {
      const { queryParam } = req.query;
      
      // Example logic: Search for address book entries by name or company
      const searchResults = await AddressBook.find({
        $or: [
          { companyName: { $regex: queryParam, $options: 'i' } }, // Case-insensitive search by name
          { state: { $regex: queryParam, $options: 'i' } }, // Case-insensitive search by company
        ],
      });
  
      res.json(searchResults);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Sort Address Book Entries
  const sortAddresses = async (req, res) => {
    try {
      const { criteria } = req.params;
      
      // Example logic: Sort address book entries by a specified field (e.g., name or company)
      const sortedAddresses = await AddressBook.find().sort({ [criteria]: 1 });
  
      res.json(sortedAddresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Pagination for Address Book Entries
  const paginateAddresses = async (req, res) => {
    try {
      const { page } = req.params;
      const perPage = 10; // Set the number of contacts per page
  
      // Example logic: Paginate contacts
      const paginatedAddresses = await AddressBook.find()
        .skip((page - 1) * perPage)
        .limit(perPage);
  
      res.json(paginatedAddresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Filter Address Book Entries
  const filterAddresses = async (req, res) => {
    try {
      const { category } = req.query;
      
      // Example logic: Filter address book entries by a specified category (e.g., customer or vendor)
      const filteredAddresses = await AddressBook.find({ category });
  
      res.json(filteredAddresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Bulk Operations (Delete Address Book Entries)
  const bulkDeleteAddresses = async (req, res) => {
    try {
      const { addressIds } = req.body;
  
      // Example logic: Bulk delete address book entries by their IDs
      await AddressBook.deleteMany({ _id: { $in: addressIds } });
  
      res.json({ message: 'Address book entries deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Export Address Book Entries
  const exportAddresses = async (req, res) => {
    try {
      // Example logic: Export contacts data as a CSV file
      const addresses = await AddressBook.find();
      const csvData = addresses.map((address) => {
        return `${address.name},${address.company},${address.email},${address.phone}`;
      }).join('\n');
  
      res.attachment('addresses-export.csv'); // Set the filename and content type
      res.send(csvData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = {
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
};
