import { body } from 'express-validator/check'
import { validatorCallback } from './index'

export const signUpValidator = [
  body('idToken')
    .exists().withMessage('idToken should be required')
    .isString().withMessage('idToken should be string')
    .trim(),
  (res, res, next) => {
    validatorCallback('idToken', req, res, next)
  },
  body('pushToken')
    .exists().withMessage('pushToken should be required')
    .isString().withMessage('pushToken should be string')
    .trim(),
  (req, res, next) => {
    validatorCallback('pushToken', req, res, next)
  }
]

export const signInValidator = [
  body('accessToken')
    .exists().withMessage('accessToken should be required')
    .isString().withMessage('accessToken should be string')
    .trim(),
  (res, res, next) => {
    validatorCallback('accessToken', req, res, next)
  },
  body('refreshToken')
    .exists().withMessage('refreshToken should be required')
    .isString().withMessage('refreshToken should be string')
    .trim(),
  (res, res, next) => {
    validatorCallback('refreshToken', req, res, next)
  },
  body('pushToken')
    .exists().withMessage('pushToken should be required')
    .isString().withMessage('pushToken should be string')
    .trim(),
  (req, res, next) => {
    validatorCallback('pushToken', req, res, next)
  }
]