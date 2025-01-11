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

const getCardById = (req, res) => {
    const { id } = req.params;
    const card = lorcanaService.getCardById(id); 
    res.json(card);
};

module.exports = {
    getAllDataZip,
    getCardById
};
