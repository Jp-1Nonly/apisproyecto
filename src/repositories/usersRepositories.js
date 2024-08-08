const { models } = require('../models');

const getAllUsers = async () => {
    return await models.users.findAll({
        include: [models.roles]
    });
};

const getUserById = async (id) => {
    return await models.users.findByPk(id), {
        include: [models.roles]
    };
};

const createUser = async (data) => {
    return await models.users.create(data);
};

const updateUser = async (id, data) => {
    return await models.users.update(data, {
        where: { id }
    });
};

const deleteUser = async (id) => {
    return await models.users.destroy({
        where: { id }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};