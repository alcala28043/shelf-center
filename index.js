const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./src/routes/admin.routes.js');
const apiRoutes = require('./src/routes/api.routes.js');
const cors = require('cors');
const APP_DATA = require('./src/app.constants.js');

const app = express();
const port = process.env.PORT || 8080;

// CORS
const allowedOrigins = APP_DATA.ALLOWED_ORIGINS;
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(APP_DATA.CORS_ERROR));
        }
    },
};
app.use(cors(corsOptions));

// Middleware para manejar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Asignacion de rutas
app.use('/admin/v1', adminRoutes);
app.use('/api/v1', apiRoutes);

//Inicialización del servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});