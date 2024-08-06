const express = require('express');
const router = express.Router();
const DevolutionsController = require('../controllers/DevolutionsController');

console.log(DevolutionsController); // Agrega esto para verificar qué funciones están importadas

router.get('/all', DevolutionsController.getAllDevolutions);
router.get('/:id', DevolutionsController.getDevolutionsById);
router.post('/', DevolutionsController.createDevolutions);
router.put('/:id', DevolutionsController.updateDevolutions);
router.delete('/:id', DevolutionsController.deleteDevolutions);

module.exports = router;
