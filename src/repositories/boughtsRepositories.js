const { models } = require('../models');

const getAllBoughts = async () => {
    return await models.boughts.findAll({
        include: [models.boughtDetails],
    });
};

const getBoughtById = async (id) => {
    return await models.boughts.findByPk(id, {
        include: [models.boughtDetails]
    });
};

const createBought = async (data) => {
    return await models.boughts.create(data);
};

const updateBought = async (id, data) => {
    return await models.boughts.update(data, {
        where: { id }
    });
};

const deleteBought = async (id) => {
    return await models.boughts.destroy({
        where: { id }
    });
};

module.exports = {
    getAllBoughts,
    getBoughtById,
    createBought,
    updateBought,
    deleteBought
};