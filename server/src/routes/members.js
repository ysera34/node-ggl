import Router from 'express'
import members from '../controllers/members'

const router = Router()

router
  .post('/signup', members.signUp)
  .post('/signin', members.signIn)
  .get('/', members.getAll)
  .get('/:id([0-9]+)', members.get)
  .put('/:id([0-9]+)', members.update)

router
  .get('/signtest', members.signTest)

export default router
