const express = require('express');
const axios = require('axios');
const router = express.Router();
const lorcanaController = require('../controllers/lorcana.controller')

router.get('/zip', lorcanaController.getAllDataZip);
router.get('/card/:id', lorcanaController.getCardById);

module.exports = router;