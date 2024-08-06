const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDb } = require('./src/models');
const SuppliesRoutes = require('./src/routes/suppliesRoutes');
const DevolutionsRoutes = require('./src/routes/DevolutionsRoutes');
const ProductCategoriesRoutes = require('./src/routes/productCategoriesRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/supplies', SuppliesRoutes);
app.use('/devolutions', DevolutionsRoutes);
app.use('/productCategories', ProductCategoriesRoutes);

const PORT = process.env.SERVER_PORT || 3000;

const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

startServer();
