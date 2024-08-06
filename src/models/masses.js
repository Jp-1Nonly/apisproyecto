const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');

const masses = db.define('masses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    notes: {
        type: DataTypes.STRING(500),
        defaultValue: 'sin notas',
    },
}, {
    tableName: 'masses',
    timestamps: false,
});

module.exports = masses;