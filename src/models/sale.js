const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Sale extends Model {}

Sale.init({
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            isAfter: new Date().toISOString().split('T')[0], // Check if the date is in the future
        },
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idClient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clients',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false,
});

module.exports = Sale;
