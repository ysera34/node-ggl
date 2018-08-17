import Router from 'express'
import parties from '../controllers/parties'

const router = Router()

router
  .post('/', parties.create)
  .get('/', parties.getAll)
  .get('/:id([0-9]+)', parties.get)
  .put('/:id([0-9]+)', parties.update)

export default router
