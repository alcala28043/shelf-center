const express = require('express');
const axios = require('axios');
const router = express.Router();
const lorcanaRoutes = require('../lorcana/routes/lorcana.routes')

router.use('/lorcana', lorcanaRoutes);

module.exports = router;