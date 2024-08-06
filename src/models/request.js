const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Request = sequelize.define('Request', {
    requestId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    statusDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'request',
    timestamps: false
});

module.exports = Request;