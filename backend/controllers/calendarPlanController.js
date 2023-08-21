const CalendarPlan = require('../models/calendarPlan');

// create a new calendarPlan
exports.createCalendarPlan = async (req, res) => {
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

        const newCalendaPlan = new CalendarPlan({
            title,
            description,
            startDate,
            endDate,
            interval,
            intervalPeriod,
            unit
        });

        const savedCalendarPlan = await newCalendaPlan.save();
        res.status(201).json(savedCalendarPlan);
    } catch (error) {
        console.error('Error creating a calendar plan:', error);
        res.status(500).json({ error: 'An error occurred while creating a calendar plan' });
    }
};

//Fetch all calendarplans
exports.getAllCalendarPlans = async (req, res) => {
    try {
        const calendarPlans = await CalendarPlan.find();
        res.status(200).json(calendarPlans);
    } catch (error) {
        console.error('Error fetching calendarplans:', error);
        res.status(500).json({ error: 'An error occurred while fetching calendarPlans' });
    }
};

//Fetch a single calendarPlan by ID
exports.getCalendarPlanById = async (req, res) => {
    try {
      const calendarPlanId = req.params.id;
      const calendarPlan = await CalendarPlan.findById(calendarPlanId);
      
      if (!calendarPlan) {
        return res.status(404).json({ error: 'CalendarPlan not found' });
      }
  
      res.status(200).json(calendarPlan);
    } catch (error) {
      console.error('Error fetching calendarPlan:', error);
      res.status(500).json({ error: 'An error occurred while fetching calendar plan' });
    }
  };
  
  // Update a calendarPlan by ID
  exports.updateCalendarPlan = async (req, res) => {
    try {
      const calendarPlanId = req.params.id;
      const updatedData = req.body;
      
      const updatedCalendarPlan = await CalendarPlan.findByIdAndUpdate(calendarPlanId, updatedData, { new: true });
  
      if (!updatedCalendarPlan) {
        return res.status(404).json({ error: 'CalendarPlan not found' });
      }
  
      res.status(200).json(updatedCalendarPlan);
    } catch (error) {
      console.error('Error updating calendarPlan:', error);
      res.status(500).json({ error: 'An error occurred while updating the calendarPlan' });
    }
  };
  
  // Delete a calendar plan  by ID
  exports.deleteCalendarPlan = async (req, res) => {
    try {
      const calendarPlanId = req.params.id;
      
      const deletedCalendarPlan = await CalendarPlan.findByIdAndDelete(calendarPlanId);
  
      if (!deletedCalendarPlan) {
        return res.status(404).json({ error: 'CalendarPlan not found' });
      }
  
      res.status(200).json({ message: 'CalendarPlan deleted successfully' });
    } catch (error) {
      console.error('Error deleting calendarplan:', error);
      res.status(500).json({ error: 'An error occurred while deleting the calendar plan' });
    }
  };
  
  









