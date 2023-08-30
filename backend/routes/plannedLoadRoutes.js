const express = require('express');
const router = express.Router();
const plannedLoadController = require('../controllers/plannedLoadController');


router.post('/new', plannedLoadController.createPlannedLoad);

router.get('/plannedloads', plannedLoadController.getAllPlannedLoads);

router.get('/plannedloads/:id', plannedLoadController.getPlannedLoadById);

router.put('/plannedloads/:id', plannedLoadController.updatePlannedLoad);

router.delete('/plannedloads/:id', plannedLoadController.deletePlannedLoad);



module.exports = router;
