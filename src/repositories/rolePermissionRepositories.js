const { models } = require('../models');

const getAllRolePermissions = async () => {
    return await models.rolePermission.findAll();
};

const getRolePermissionById = async (id) => {
    return await models.rolePermission.findByPk(id);
};

const createRolePermission = async (data) => {
    return await models.rolePermission.create(data);
};

const updateRolePermission = async (id, data) => {
    return await models.rolePermission.update(data, {
        where: { id }
    });
};

const deleteRolePermission = async (id) => {
    return await models.rolePermission.destroy({
        where: { id }
    });
};

module.exports = {
    getAllRolePermissions,
    getRolePermissionById,
    createRolePermission,
    updateRolePermission,
    deleteRolePermission
};