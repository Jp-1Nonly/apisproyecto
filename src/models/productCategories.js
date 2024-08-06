const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const productCategories = sequelize.define('productCategories', {
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
