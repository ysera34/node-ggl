import Router from 'express'
import members from '../controllers/members'

const router = Router()

router
  .post('/', members.create)
  .get('/', members.getAll)
  .get('/:id([0-9]+)', members.get)
  .put('/:id([0-9]+)', members.update)

export default router
