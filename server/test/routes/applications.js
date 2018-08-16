import server from '../../src'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { Transaction } from '@google-cloud/firestore';
const should = chai.should()

chai.use(chaiHttp)

suite('# Route Applicate Test', () => {
  const application = {
    id: 1,
  }
  
  test('test :: post method call', (done) => {
    chai.request(server)
      .post('/api/v1/applications')
      .send(member)
      .end((err, res) => {
        res.should.have.status(200)
        // res.body.should.be.a('object')
        done()
      })
  })

  test('test :: get all method call', (done) => {
    chai.request(server)
      .get('/api/v1/applications')
      .end((err, res) => {
        res.should.have.status(200)
        // res.body.should.be.a('array')
        done()
      })
  })

  test('test :: get method call', (done) => {
    chai.request(server)
      .get(`/api/v1/applications/${application.id}`)
      .end((err, res) => {
        res.should.have.status(200)
        // res.body.should.be.an('object')
        // res.body.should.have.property('id')
        done()
      })
  })

  test('test :: put method call', (done) => {
    chai.request(server)
      .put(`/api/v1/applications/${application.id}`)
      .end((err, res) => {
        res.should.have.status(200)
        // res.body.should.be.an('object')
        done()
      })
  })
  
})