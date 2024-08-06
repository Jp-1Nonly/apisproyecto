const { models } = require('../models');

const getAllDevolutions = async () => {
    return await models.Devolutions.findAll();
};

const getDevolutionsById = async (id) => {
    return await models.Devolutions.findByPk(id);
};

const createDevolutions = async (data) => {
    return await models.Devolutions.create(data);
};

const updateDevolutions = async (id, data) => {
    return await models.Devolutions.update(data, {
        where: { id }
    });
};

const deleteDevolutions = async (id) => {
    return await models.Devolutions.destroy({
        where: { id }
    });
};

module.exports = {
    getAllDevolutions,
    getDevolutionsById,
    createDevolutions,
    updateDevolutions,
    deleteDevolutions
};

