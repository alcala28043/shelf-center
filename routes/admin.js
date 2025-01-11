const express = require('express');
const router = express.Router();

const RESPONSE_GET = { 'message': 'Has hecho un get' };
const RESPONSE_POST = { 'message': 'Has hecho un post' };

router.get('/lorcana-cards', (req, res) => {
    res.json(RESPONSE_GET);
});

router.post('/lorcana-cards', (req, res) => {
    res.status(201).json(RESPONSE_POST);
});

module.exports = router;