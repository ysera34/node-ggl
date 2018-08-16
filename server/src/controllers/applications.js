import { asyncWithException } from '../helpers'
import models from '../database'

const applications = {}

applications.add = asyncWithException(async(req, res, next) => {
  res.send('applications add')
})

applications.getAll = asyncWithException(async(req, res, net) => {
  res.send('applications getAll')
})

applications.get = asyncWithException(async(req, res, net) => {
  res.send('applications get')
})

applications.update = asyncWithException(async(req, res, net) => {
  res.send('applications update')
})

export default applications
