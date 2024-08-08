const express = require('express');
const boughtController = require('../controllers/boughtsController');
const validateRole = require('../middlewares/validateRole'); // pendiente

const router = express.Router();

router.get('/', boughtController.getAllBoughts);
router.get('/:id', boughtController.getBoughtById);
router.post('/',  validateRole,  boughtController.createBought);
router.put('/:id', validateRole,  boughtController.updateBought);
router.delete('/:id', boughtController.deleteBought);

module.exports = router;