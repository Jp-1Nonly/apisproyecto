const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDb } = require('./src/models');
const SuppliesRoutes = require('./src/routes/suppliesRoutes');
const DevolutionsRoutes = require('./src/routes/DevolutionsRoutes');
const ProductCategoriesRoutes = require('./src/routes/productCategoriesRoutes');
const ProductRoutes = require('./src/routes/productRoutes');
const clientRoutes = require('./src/routes/clientRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');
const saleRoutes = require('./src/routes/saleRoutes');
const authRoutes = require('./src/routes/authRoutes');
const roleRoute = require('./src/routes/roleRoutes');
const userRoute = require('./src/routes/userRoutes');
const boughtRoute = require('./src/routes/boughtRoutes');
const rolePermissionRoute = require('./src/routes/rolePermissionRoutes');
const boughtDetailRoute = require('./src/routes/boughtDetailRoutes');
const providerRoute = require('./src/routes/providerRoutes');
const permissionRoute = require('./src/routes/permissionRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/supplies', SuppliesRoutes);
app.use('/devolutions', DevolutionsRoutes);
app.use('/productCategories', ProductCategoriesRoutes);
app.use('/product', ProductRoutes);
app.use('/api', clientRoutes);
app.use('/api', employeeRoutes);
app.use('/api', saleRoutes);
app.use('/api', authRoutes);
app.use('/api/roles', roleRoute);
app.use('/api/users', userRoute);
app.use('/api/boughts', boughtRoute);
app.use('/api/rolePermission', rolePermissionRoute);
app.use('/api/permissions', permissionRoute);
app.use('/api/boughtsDetail', boughtDetailRoute);
app.use('/api/providers', providerRoute);

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
