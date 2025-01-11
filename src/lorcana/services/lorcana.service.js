const axios = require('axios');
const LORCANA = require('../constants/lorcana.constants');

// Función para obtener zip con toda la info de lorcana
const getAllDataZip = async (res) => {
    const zipFileUrl = LORCANA.DATA_ZIP_URL; 
    try {
        const response = await axios.get(zipFileUrl, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=file.zip');        
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: LORCANA.DATA_ZIP_ERROR });
    }
};

module.exports = {
    getAllDataZip
};