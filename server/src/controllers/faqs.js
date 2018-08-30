import { asyncWithException } from '../helpers'
import models from '../database'

const faqs = {}

faqs.create = asyncWithException(async(req, res, next) => {
  res.send('faqs add')
})

faqs.getList = asyncWithException(async(req, res, next) => {
  res.send('faqs getList')
})

faqs.get = asyncWithException(async(req, res, next) => {
  res.send('faqs get')
})

faqs.update = asyncWithException(async(req, res, next) => {

})

export default faqs
