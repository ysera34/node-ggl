import { asyncWithException } from '../helpers'
import models from '../database'

const parties = {}

parties.create = asyncWithException(async(req, res, next) => {
  res.send('parties add')
})

parties.getList = asyncWithException(async(req, res, next) => {
  res.send('parties getList')
})

parties.get = asyncWithException(async(req, res, next) => {
  res.send('parties get')
})

parties.update = asyncWithException(async(req, res, next) => {
  res.send('parties update')
})

export default parties
