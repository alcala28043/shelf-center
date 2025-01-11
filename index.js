const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js');

const app = express();
const port = process.env.PORT || 8080;

// Middleware para manejar solicitudes JSON
app.use(bodyParser.json());

// Usar las rutas de la API en el servidor
app.use('/v1/admin', adminRoutes);  // Las rutas de la API estarán bajo el prefijo /admin

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});