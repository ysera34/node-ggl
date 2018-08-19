import { validationResult } from 'express-validator/check'

export const validatorCallback = (property, req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next({
      customCode: 400,
      customMessage: errors.mapped(['porperty']).msg
    })
  } else {
    next()
  }
}