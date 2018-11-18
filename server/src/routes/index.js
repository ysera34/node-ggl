import Router from 'express'
import database from '../database'
import members from './members'
import parties from './parties'
import registrations from './registrations'
import notices from './notices'
import faqs from './faqs'

const router = Router()

router.get('/', async(req, res, next) => {
  try {
    const isHealth = await database.checkHealthy()
    if (!isHealth) throw Error('unHealth server')
    res.send({ state: 'healthy' })
  } catch (error) {
    next(error)
  }
})

router.use('/members', members)
router.use('/parties', parties)
router.use('/registrations', registrations)
router.use('/notices', notices)
router.use('/faqs', faqs)

export default router
