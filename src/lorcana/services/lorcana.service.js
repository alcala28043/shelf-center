const axios = require('axios');

// Función para obtener todas las cartas
const getAllDataZip = async (res) => {
    const zipFileUrl = 'https://lorcanajson.org/files/current/en/allCards.json.zip'; 

    try {
        const response = await axios.get(zipFileUrl, { responseType: 'arraybuffer' });

        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=file.zip');
        
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el archivo ZIP' });
    }
};

const getCardById = (id) => {
    return { id, name: 'Card Example' };
};

module.exports = {
    getAllDataZip,
    getCardById
};