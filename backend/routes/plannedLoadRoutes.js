const express = require('express');
const router = express.Router();
const plannedLoadController = require('../controllers/plannedLoadController');


router.post('/create', plannedLoadController.createPlannedLoad);

router.get('/get', plannedLoadController.getAllPlannedLoads);

router.get('/:id', plannedLoadController.getPlannedLoadById);

router.put('/:id', plannedLoadController.updatePlannedLoad);

router.delete('/:id', plannedLoadController.deletePlannedLoad);



module.exports = router;
