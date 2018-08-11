import { asyncWithException } from '../helpers'
import models from '../models'

const members = {}

members.getAll = asyncWithException(async(req, res, next) => {
  const attributes = ['id', 'email', 'name']
  const members = await models.members.findAll({ attributes })
  res.json(members)
})

members.get = asyncWithException(async(req, res, next) => {
  const attributes = ['id', 'email', 'name']
  const options = {
    where: {
      id: req.params.id,
    },
    attributes,
  }
  const members = await models.members.findOne(options)
  res.json(members)
})

members.create = asyncWithException(async(req, res, next) => {
  res.send('hello members create')
})

members.update = asyncWithException(async(req, res, next) => {
  res.send('hello members update')
})

export default members