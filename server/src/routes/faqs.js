import Router from 'express'
import faqs from '../controllers/faqs'

const router = Router()

router
  .post('/', faqs.create)
  .get('/', faqs.getList)
  .get('/:faqId', faqs.get)
  .put('/:faqId', faqs.update)

  export default router
  