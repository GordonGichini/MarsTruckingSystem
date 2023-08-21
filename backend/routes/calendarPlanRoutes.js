const express = require('express');
const calendarPlanController = require('../controllers/calendarPlanController');
const router = express.Router();

// Create a new calendar plan
router.post('/create', calendarPlanController.createCalendarPlan);

// Fetch all calendar plans
router.get('/get', calendarPlanController.getAllCalendarPlans);

// Fetch a single calendar plan by ID
router.get('/:id', calendarPlanController.getCalendarPlanById);

// Update a calendar plan by ID
router.put('/:id', calendarPlanController.updateCalendarPlan);

// Delete a calendar plan by ID
router.delete('/:id', calendarPlanController.deleteCalendarPlan);


module.exports = router;
