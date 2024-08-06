// src/models/Devolutions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Devolutions = sequelize.define('Devolutions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    voucher: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    client: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantityProducts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
        },
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_sale: {
        type: DataTypes.INTEGER,
        references: {
            model: 'sale',
            key: 'id',
        },
    },
}, {
    tableName: 'devolutions',
    timestamps: false,
});



module.exports = Devolutions;
