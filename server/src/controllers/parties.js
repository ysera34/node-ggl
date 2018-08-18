import { asyncWithException } from '../helpers'
import models from '../database'

const parties = {}

parties.create = asyncWithException(async(req, res, next) => {
  res.send('parties add')
})

parties.getAll = asyncWithException(async(req, res, net) => {
  res.send('parties getAll')
})

parties.get = asyncWithException(async(req, res, net) => {
  res.send('parties get')
})

parties.update = asyncWithException(async(req, res, net) => {
  res.send('parties update')
})

export default parties
