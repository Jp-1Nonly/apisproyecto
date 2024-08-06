
const { body, validationResult } = require('express-validator');

const validateRequest    = [
    body('total').isInt().withMessage('Invalid total'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateRequest;