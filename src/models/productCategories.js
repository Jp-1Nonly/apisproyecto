const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');

const productCategories = db.define('productCategories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'productCategories',
    timestamps: false,
});

module.exports = productCategories;
