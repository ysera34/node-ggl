import Router from 'express'
import notices from '../controllers/notices'

const router = Router()

router
  .post('/', notices.create)
  .get('/', notices.getList)
  .get('/:noticeId', notices.get)
  .put('/:noticeId', notices.update)

  export default router
  