const sequelize = require('../config/database');
const Supplies = require('./supplies');
const Devolutions = require('./Devolutions');
const DevolutionsDetails = require('./DevolutionsDetails');
const Sales = require('./Sales');

// Definir asociaciones si es necesario
Devolutions.belongsTo(Sales, { foreignKey: 'id_sales' });
DevolutionsDetails.belongsTo(Devolutions, { foreignKey: 'id_devolution' });


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