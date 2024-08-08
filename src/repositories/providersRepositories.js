const { models } = require('../models');

const getAllProviders = async () => {
    return await models.providers.findAll();
};

const getProviderById = async (id) => {
    return await models.providers.findByPk(id);
};

const createProvider = async (data) => {
    return await models.providers.create(data);
};

const updateProvider = async (id, data) => {
    return await models.providers.update(data, {
        where: { id }
    });
};

const deleteProvider = async (id) => {
    return await models.providers.destroy({
        where: { id }
    });
};

module.exports = {
    getAllProviders,
    getProviderById,
    createProvider,
    updateProvider,
    deleteProvider
};