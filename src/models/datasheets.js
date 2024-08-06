const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');
const masses = require('./masses');

const datasheets = db.define('datasheets', {
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
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        validate: {
            isAfterStartDate(value) {
                if (value && value < this.startDate) {
                    throw new Error('endDate must be greater than startDate');
                }
            },
        },
    },
}, {
    tableName: 'datasheets',
    timestamps: false,
});

module.exports = datasheets;
