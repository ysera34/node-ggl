import Router from 'express'
import applications from '../controllers/applications'

const router = Router()

router
  .post('/', applications.add)
  .get('/', applications.getAll)
  .get('/:id([0-9]+)', applications.get)
  .put('/:id([0-9]+)', applications.update)

export default router
