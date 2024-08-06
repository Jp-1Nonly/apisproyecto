
const { body, validationResult } = require('express-validator');

const validateOrderDetail = [
    body('quantity').isInt().withMessage('Invalid quantity'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateOrderDetail;
