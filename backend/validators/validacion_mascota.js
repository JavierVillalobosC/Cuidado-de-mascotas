const { check } = require('express-validator')
const { validateResult } = require('../helpers/validators')

const validateCreate = [
    check('type')
        .exists()
        .not()
        .isEmpty(),
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('raza')
        .exists()
        .not()
        .isEmpty(),
    check('age')
        .exists()
        .isEmpty()
        .isNumeric(),
    check('features')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    },
]

module.exports = { validateCreate }