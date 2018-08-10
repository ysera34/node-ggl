const env = process.env.NODE_ENV || 'development'
import Sequelize from 'sequelize'
import { configs } from './../../configs'
const dbConfig = configs[env]

const sequelize = new Sequelize(
  dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
