const express = require('express');
const router = express.Router();
const DevolutionsController = require('../controllers/DevolutionsController');
const validateDevolutions = require('../middlewares/validateDevolutions');

console.log(DevolutionsController); // Agrega esto para verificar qué funciones están importadas

router.get('/all', DevolutionsController.getAllDevolutions);
router.get('/:id', DevolutionsController.getDevolutionsById);
router.post('/', validateDevolutions, DevolutionsController.createDevolutions);
router.put('/:id', validateDevolutions, DevolutionsController.updateDevolutions);
router.delete('/:id', DevolutionsController.deleteDevolutions);

module.exports = router;
