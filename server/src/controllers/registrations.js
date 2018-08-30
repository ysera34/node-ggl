import { asyncWithException } from '../helpers'
import models from '../database'

const registrations = {}

registrations.create = asyncWithException(async(req, res, next) => {
  res.send('registrations add')
})

registrations.getAll = asyncWithException(async(req, res, next) => {
  res.send('registrations getAll')
})

registrations.get = asyncWithException(async(req, res, next) => {
  res.send('registrations get')
})

registrations.update = asyncWithException(async(req, res, next) => {
  res.send('registrations update')
})

export default registrations
