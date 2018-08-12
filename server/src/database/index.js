import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
import  configs  from './../configs/database.json'
const config = configs[env]
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

// if (config.use_env_variable) {
//   const sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   const sequelize = new Sequelize(config.database, config.username, config.password, config.options);
// }

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

fs
  .readdirSync(`${__dirname}/models`)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize.import(path.join(`${__dirname}/models`, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
