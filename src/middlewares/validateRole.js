const { body, validationResult } = require('express-validator');

const validateRole = [
    // body('role').notEmpty().withMessage('Role is required'),
    // (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //     }
    //     next();
    // }   
];

module.exports = validateRole;