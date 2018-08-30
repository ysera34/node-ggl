import Router from 'express'
import registrations from '../controllers/registrations'

const router = Router()

router
  .post('/', registrations.create)
  .get('/', registrations.getAll)
  .get('/:id([0-9]+)', registrations.get)
  .put('/:id([0-9]+)', registrations.update)

export default router
