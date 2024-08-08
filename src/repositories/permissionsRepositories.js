const { models } = require('../models');

const getAllPermissions = async () => {
    return await models.permissions.findAll();
};

const getPermissionById = async (id) => {
    return await models.permissions.findByPk(id);
};

const createPermission = async (data) => {
    return await models.permissions.create(data);
};

const updatePermission = async (id, data) => {
    return await models.permissions.update(data, {
        where: { id }
    });
};

const deletePermission = async (id) => {
    return await models.permissions.destroy({
        where: { id }
    });
};

module.exports = {
    getAllPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission
};