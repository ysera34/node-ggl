import database from '../../../src/database'
import chai from 'chai'
const should = chai.should()

suite('# Model Sync Test', () => {

  suiteSetup((done) => {
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
    if (healthCheck) done()
  })

  // test('test :: create table', async (done) => {    
  //   const result = await database.members.sync()
  //   done()
  // })

  // test('test :: force create table', async (done) => {
  //   const result = await database.members.sync({ force: true })
  //   done()  
  // })

  // test('test :: drop table', async (done) => {
  //   const result = await database.members.drop()
  //   done()
  // })
})