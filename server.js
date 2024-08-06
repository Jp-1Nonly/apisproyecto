const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDb } = require('./src/models');
const SuppliesRoutes = require('./src/routes/suppliesRoutes');
const DevolutionsRoutes = require('./src/routes/DevolutionsRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/supplies', SuppliesRoutes);
app.use('/devolutions', DevolutionsRoutes);

const PORT = process.env.SERVER_PORT || 3000;

const startServer = async () => {
    try {
        // Sincroniza la base de datos y recrea las tablas si es necesario
        await connectDb();
        // Inicia el servidor después de sincronizar la base de datos
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

startServer();
