const express = require('express');
const boughtDetailController = require('../controllers/boughtDetailsController');
const validateRole = require('../middlewares/validateRole'); // pendiente

const router = express.Router();

router.get('/', boughtDetailController.getAllBoughtDetails);
router.get('/:id', boughtDetailController.getBoughtDetailById);
router.post('/',  validateRole,  boughtDetailController.createBoughtDetail);
router.put('/:id', validateRole,  boughtDetailController.updateBoughtDetail);
router.delete('/:id', boughtDetailController.deleteBoughtDetail);

module.exports = router;