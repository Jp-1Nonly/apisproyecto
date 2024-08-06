// src/models/DevolutionsDetails.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DevolutionsDetails = sequelize.define('DevolutionsDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    motive: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_devolution: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Devolutions',
            key: 'id',
        },
    },
}, {
    tableName: 'devolutionsDetails',
    timestamps: false,
});



module.exports = DevolutionsDetails;
