const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incident.controller');

router.get('/', incidentController.getAll);
router.post('/', incidentController.create);
router.get('/:id', incidentController.getById);
router.delete('/:id', incidentController.remove);

module.exports = router;
