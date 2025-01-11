const axios = require('axios');
const lorcanaService = require('../services/lorcana.service')

const getAllDataZip = async (req, res) => {
    try {
        const data = await lorcanaService.getAllDataZip(res); 
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllDataZip
};
