const express = require('express');
const providerController = require('../controllers/providersController');
const validateRole = require('../middlewares/validateRole'); // pendiente

const router = express.Router();

router.get('/', providerController.getAllProviders);
router.get('/:id', providerController.getProviderById);
router.post('/',  validateRole,  providerController.createProvider);
router.put('/:id', validateRole,  providerController.updateProvider);
router.delete('/:id', providerController.deleteProvider);

module.exports = router;