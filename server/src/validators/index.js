import { param, validationResult } from 'express-validator/check'

export const validatorCallback = (property, req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next({
      customCode: 400,
      customMessage: errors.mapped()['porperty'].msg
    })
  } else {
    next()
  }
}

export const paramIdValidator = [
  param('id')
    .exists().withMessage('id should be required in params')
    .isNumeric().withMessage('id should be a number')
    .custom(value => value > 0).withMessage('id is not valid'),
  (req, res, next) => {
    validatorCallback('id', req, res, next)
  }
]