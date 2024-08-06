const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');
const datasheets = require('./datasheets');
const productCategories = require('./productCategories');

const products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idDatasheet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: datasheets,
            key: 'id',
        },
    },
    idCategorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productCategories,
            key: 'id',
        },
    },
    flavor: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
        },
    },
    image: {
        type: DataTypes.STRING(5000),
        allowNull: false,
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = products;
