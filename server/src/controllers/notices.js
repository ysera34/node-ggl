import { asyncWithException } from '../helpers'
import models from '../database'

const notices = {}

notices.create = asyncWithException(async(req, res, next) => {
  res.send('notices add')
})

notices.getList = asyncWithException(async(req, res, next) => {
  res.send('notices getList')
})

notices.get = asyncWithException(async(req, res, next) => {
  res.send('notices get')
})

notices.update = asyncWithException(async(req, res, next) => {
  res.send('notices update')
})

export default notices