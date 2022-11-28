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
        .isNumeric()
        .custom((value, { req }) => {
            if (value > 1|| value < 20) {
                throw new Error('Rango de edad debe ser entre 1 y 20')
            }
            return true
        }),
    check('features')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    },
]

module.exports = { validateCreate }