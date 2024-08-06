// src/models/Sales.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sales = sequelize.define('Sales', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    deliveryDate: DataTypes.DATE,
    total: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
    idClient: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'sales',
    timestamps: false,
});

module.exports = Sales;
