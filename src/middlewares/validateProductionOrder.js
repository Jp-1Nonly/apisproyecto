
const { body, validationResult } = require('express-validator');

const validateProductionOrder = [
    body('notes').isLength({ max: 400 }).withMessage('Notes can have up to 400 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateProductionOrder;

