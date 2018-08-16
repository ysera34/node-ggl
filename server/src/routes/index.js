import Router from 'express'
import database from '../database'
import members from './members'
import parties from './parties'
import applications from './applications'

const router = Router()

router.use('/members', members)
router.use('/parties', parties)
router.use('/applications', applications)

const healthCheck = async() => {
	try {
		await database.sequelize.authenticate()
		console.log('database connect success')
		return true
	} catch (error) {
		console.error('database connect fail', error)
		return false
	}
}

router.get('/', async(req, res, next) => {
	try {
		const isHealth = await healthCheck()
		if (!isHealth) throw Error('unHealth server')
		res.send({ state: 'healthy' })
	} catch (error) {
		next(err)
	}
})

export default router
