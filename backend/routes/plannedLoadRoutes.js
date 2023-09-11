const express = require('express');
const router = express.Router();
const plannedLoadController = require('../controllers/plannedLoadController');


router.post('/', plannedLoadController.createPlannedLoad);

router.get('/', plannedLoadController.getAllPlannedLoads);

router.get('/:id', plannedLoadController.getPlannedLoadById);

router.put('/:id', plannedLoadController.updatePlannedLoad);

router.delete('/:id', plannedLoadController.deletePlannedLoad);

router.post('/:id/convert', plannedLoadController.convertToActualLoad);



module.exports = router;
