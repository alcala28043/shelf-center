const express = require('express');
const router = express.Router();
const lorcanaController = require('../controllers/lorcana.controller')

router.get('/zip', lorcanaController.getAllDataZip);

module.exports = router;