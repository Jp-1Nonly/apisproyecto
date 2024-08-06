const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Supplies = sequelize.define('Supplies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    stock: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false // Desactivar `createdAt` y `updatedAt`
});

module.exports = Supplies;
