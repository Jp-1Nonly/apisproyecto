const { models } = require('../models');

const getAllBoughtDetails = async () => {
    return await models.boughtDetails.findAll();
};

const getBoughtDetailById = async (id) => {
    return await models.boughtDetails.findByPk(id);
};

const createBoughtDetail = async (data) => {
    return await models.boughtDetails.create(data);
};

const updateBoughtDetail = async (id, data) => {
    return await models.boughtDetails.update(data, {
        where: { id }
    });
};

const deleteBoughtDetail = async (id) => {
    return await models.boughtDetails.destroy({
        where: { id }
    });
};

module.exports = {
    getAllBoughtDetails,
    getBoughtDetailById,
    createBoughtDetail,
    updateBoughtDetail,
    deleteBoughtDetail
};