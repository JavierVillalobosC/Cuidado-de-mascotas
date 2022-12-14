const { check } = require('express-validator')
const { validateResult } = require('../helpers/validators')

const validateCreate = [
    check('calification')
        .exists()
        .isEmpty()
        .isNumeric()
        .custom((value, { req }) => {
            if (value => 1|| value <= 5 ) {
                throw new Error(' Califique entre  1 y 5')
            }
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    },
]

module.exports = { validateCreate }