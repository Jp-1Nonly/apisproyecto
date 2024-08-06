const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

    const ProductionOrder = sequelize.define('ProductionOrder', {
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING(400),
            allowNull: true
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        targetDate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'productionOrder',
        timestamps: false
    });

    module.exports = ProductionOrder;

