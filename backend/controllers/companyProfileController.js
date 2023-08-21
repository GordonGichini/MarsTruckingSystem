const CompanyProfile = require('../models/companyProfile');

// create a company profile
exports.createCompanyProfile = async (req, res) => {
    try {
        const {
            title,
            description,
            startDate,
            endDate,
            interval,
            intervalPeriod,
            unit
        } = req.body;
        console.log('Received Data:', req.body);

        const newCompanyProfile = new CompanyProfile({
            title,
            description,
            startDate,
            endDate,
            interval,
            intervalPeriod,
            unit
        });

        const savedCompanyProfile = await newCompanyProfile.save();
        res.status(201).json(savedCompanyProfile);
    } catch (error) {
        console.error('Error creating a company profile:', error);
        res.status(500).json({ error: 'An error occurred while creating a company profile' });
    }
};

//Fetch a company profile
exports.getCompanyProfile = async (req, res) => {
    try {
        const companyProfile = await CompanyProfile.find();
        res.status(200).json(companyProfile);
    } catch (error) {
        console.error('Error fetching company profile:', error);
        res.status(500).json({ error: 'An error occurred while fetching company profile' });
    }
};

//Fetch a single calendarPlan by ID
exports.getCompanyProfileById = async (req, res) => {
    try {
      const companyProfileId = req.params.id;
      const companyProfile = await CompanyProfile.findById(companyProfileId);
      
      if (!companyProfile) {
        return res.status(404).json({ error: 'Company Profile not found' });
      }
  
      res.status(200).json(companyProfile);
    } catch (error) {
      console.error('Error fetching companyProfile:', error);
      res.status(500).json({ error: 'An error occurred while fetching company profile' });
    }
  };
  
  // Update a calendarPlan by ID
  exports.updateCompanyProfile = async (req, res) => {
    try {
      const companyProfileId = req.params.id;
      const updatedData = req.body;
      
      const updatedCompanyProfile = await CompanyProfile.findByIdAndUpdate(companyProfileId, updatedData, { new: true });
  
      if (!updatedCompanyProfile) {
        return res.status(404).json({ error: 'Company Profile not found' });
      }
  
      res.status(200).json(updatedCompanyProfile);
    } catch (error) {
      console.error('Error updating companyProfile:', error);
      res.status(500).json({ error: 'An error occurred while updating the companyProfile' });
    }
  };
  
  // Delete a calendar plan  by ID
  exports.deleteCompanyProfile = async (req, res) => {
    try {
      const companyProfileId = req.params.id;
      
      const deletedCompanyProfile = await CompanyProfile.findByIdAndDelete(companyProfileId);
  
      if (!deletedCompanyProfile) {
        return res.status(404).json({ error: 'Company Profile not found' });
      }
  
      res.status(200).json({ message: 'Company Profile deleted successfully' });
    } catch (error) {
      console.error('Error deleting company profile:', error);
      res.status(500).json({ error: 'An error occurred while deleting the company profile' });
    }
  };
  