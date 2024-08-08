const express = require('express');
const userController = require('../controllers/usersController');
const validateRole = require('../middlewares/validateRole'); // pendiente

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/',  validateRole,  userController.createUser);
router.put('/:id', validateRole,  userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;