const DevolutionsService = require('../services/devolutionsService');
const { sendResponse, sendError } = require('../utils/response');
const DevolutionsDetails = require('../models/DevolutionsDetails');
const Devolutions = require('../models/Devolutions');
const sequelize = require('../config/database');
const Sales = sequelize.models.Sales; // Asegúrate de que Sales esté disponible


const getAllDevolutions = async (req, res) => {
    try {
        const Devolutions = await DevolutionsService.getAllDevolutions();
        sendResponse(res, Devolutions);
    } catch (error) {
        sendError(res, error);
    }
};

const createDevolutions = async (req, res) => {
    const t = await sequelize.transaction();

    try {
        const { devolutionData, devolutionDetailsData } = req.body;
        const { voucher, client, date, quantityProducts, state, id_sales } = devolutionData;

        // Verificar si Sales está definido
        console.log('Sales model:', Sales);

        // Verificar si el id_sales existe en la tabla sales
        const sale = await Sales.findByPk(id_sales);
        if (!sale) {
            throw new Error('id_sales no existe en la tabla sales');
        }

        // Crear la devolution
        const devolution = await Devolutions.create({
            voucher,
            client,
            date,
            quantityProducts,
            state,
            id_sales
        }, { transaction: t });

        // Crear los detalles de la devolution
        for (const detail of devolutionDetailsData) {
            await DevolutionsDetails.create({
                id_product: detail.id_product,
                quantity: detail.quantity,
                motive: detail.motive,
                id_devolution: devolution.id
            }, { transaction: t });
        }

        // Confirmar la transacción
        await t.commit();
        res.status(201).json({ devolution, details: devolutionDetailsData });
    } catch (error) {
        // Deshacer la transacción
        await t.rollback();
        res.status(400).json({ error: error.message });
    }
};



const getDevolutionsById = async (req, res) => {
    try {
        const Devolutions = await DevolutionsService.getDevolutionsById(req.params.id);
        if (!Devolutions) {
            return sendError(res, 'Devolutions not found', 404);
        }
        sendResponse(res, Devolutions);
    } catch (error) {
        sendError(res, error);
    }
};


const updateDevolutions = async (req, res) => {
    try {
        const updated = await DevolutionsService.updateDevolutions(req.params.id, req.body);
        if (updated[0] === 0) {
            return sendError(res, 'Devolutions not found', 404);
        }
        sendResponse(res, 'Devolutions updated successfully');
    } catch (error) {
        sendError(res, error);
    }
};

const deleteDevolutions = async (req, res) => {
    try {
        const deleted = await DevolutionsService.deleteDevolutions(req.params.id);
        if (deleted === 0) {
            return sendError(res, 'Devolutions not found', 404);
        }
        sendResponse(res, 'Devolutions deleted successfully');
    } catch (error) {
        sendError(res, error);
    }
};

module.exports = {
    getAllDevolutions,
    getDevolutionsById,
    createDevolutions,
    updateDevolutions,
    deleteDevolutions
};
