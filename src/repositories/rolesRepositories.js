const { models } = require('../models');
const permissions = require('../models/permissions');

const getAllRoles = async () => {
    return await models.roles.findAll({
        include: {
            model: permissions,
            through: { attributes: [] }
        }
    });
};

const getRoleById = async (id) => {
    return await models.roles.findByPk(id, {
        include: {
            model: permissions,
            through: { attributes: [] }
        }
    });
};

const createRole = async (data) => {
    return await models.roles.create(data);
};

const updateRole = async (id, data) => {
    return await models.roles.update(data, {
        where: { id }
    });
};

const deleteRole = async (id) => {
    return await models.roles.destroy({
        where: { id }
    });
};

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
};