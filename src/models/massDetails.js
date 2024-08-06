const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');
const masses = require('./masses');
const supplies = require('./supplies');

const massDetails = db.define('massDetails', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idMass: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: masses,
            key: 'id',
        },
    },
    idSupplie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: supplies,
            key: 'id',
        },
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
            isIn: [['gr', 'ml', 'unit']],
        },
    },
}, {
    tableName: 'massDetails',
    timestamps: false,
});

module.exports = massDetails;
