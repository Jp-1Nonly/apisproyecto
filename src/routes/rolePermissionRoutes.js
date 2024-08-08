const express = require('express');
const rolePermissionController = require('../controllers/rolePermissionController');
const validateRole = require('../middlewares/validateRole');

const router = express.Router();

router.get('/', rolePermissionController.getAllRolePermissions);
router.get('/:id', rolePermissionController.getRolePermissionById);
router.post('/',  validateRole,  rolePermissionController.createRolePermission);
router.put('/:id', validateRole,  rolePermissionController.updateRolePermission);
router.delete('/:id', rolePermissionController.deleteRolePermission);

module.exports = router;