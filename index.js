const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./src/routes/admin.js');
const apiRoutes = require('./src/routes/api.js');

const app = express();
const port = process.env.PORT || 8080;

// Middleware para manejar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/admin/v1', adminRoutes);  
app.use('/api/v1', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});