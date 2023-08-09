const express = require('express');
const router = express.Router();
const PlannedLoad = require('../models/plannedLoad');

// Create a planned load
router.post('/planned_loads', async (req, res) => {
  try {
    const plannedLoadData = req.body;
    const plannedLoad = new PlannedLoad(plannedLoadData);
    await plannedLoad.save();
    res.status(201).json(plannedLoad);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all planned loads
router.get('/planned_loads', async (req, res) => {
  try {
    const plannedLoads = await PlannedLoad.find();
    res.json(plannedLoads);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific planned load by ID
router.get('/planned_loads/:id', async (req, res) => {
  try {
    const plannedLoad = await PlannedLoad.findById(req.params.id);
    if (!plannedLoad) {
      return res.status(404).json({ error: 'Planned load not found' });
    }
    res.json(plannedLoad);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other CRUD endpoints (update and delete) can be added similarly

module.exports = router;
