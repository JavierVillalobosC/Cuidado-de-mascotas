const check = require('express-validator')
const validateResult = require('../helpers/validateHelper')

const validateCreate = [
    check('rut')
        .exists()
        .not()
        .isEmpty(),
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('lastname')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .isEmail(),
    check('phone')
        .exists()
        .isEmpty()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    },
]

module.exports = { validateCreate }