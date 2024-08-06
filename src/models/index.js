const sequelize = require('../config/database');
const Supplies = require('./supplies');
const Devolutions = require('./Devolutions');
const DevolutionsDetails = require('./DevolutionsDetails');
const Sales = require('./Sales');
const masses = require('./masses');
const massDetails = require('./massDetails');
const datasheets = require('./datasheets');
const datasheetDetails = require('./datasheetDetails');
const productCategories = require('./productCategories');
const products = require('./products');

// Definir asociaciones si es necesario
Devolutions.belongsTo(Sales, { foreignKey: 'id_sales' });
DevolutionsDetails.belongsTo(Devolutions, { foreignKey: 'id_devolution' });

masses.hasMany(massDetails, { foreignKey: 'idMass' });
massDetails.belongsTo(masses, { foreignKey: 'idMass' });

Supplies.hasMany(massDetails, { foreignKey: 'idSupplie' });
massDetails.belongsTo(Supplies, { foreignKey: 'idSupplie' });

masses.hasMany(datasheets, { foreignKey: 'idMass' });
datasheets.belongsTo(masses, { foreignKey: 'idMass' });

datasheets.hasMany(datasheetDetails, { foreignKey: 'idDatasheet' });
datasheetDetails.belongsTo(datasheets, { foreignKey: 'idDatasheet' });

Supplies.hasMany(datasheetDetails, { foreignKey: 'idSupplie' });
datasheetDetails.belongsTo(Supplies, { foreignKey: 'idSupplie' });

productCategories.hasMany(products, { foreignKey: 'idCategorie' });
products.belongsTo(productCategories, { foreignKey: 'idCategorie' });

datasheets.hasMany(products, { foreignKey: 'idDatasheet' });
products.belongsTo(datasheets, { foreignKey: 'idDatasheet' });


const models = {
    Supplies,
    Devolutions,
    DevolutionsDetails,
    Sales
};

const connectDb = async () => {
    try {
        await sequelize.sync({ alter: true }); // Sincroniza la base de datos y recrea las tablas
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

module.exports = { models, connectDb };