const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const rolePermission = sequelize.define('rolePermission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    idRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',  
            key: 'id'        
        },
    },
    idPermission: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permissions',  
            key: 'id'              
        },
    }
}, {
    tableName: 'rolePermission'
});

module.exports = rolePermission;