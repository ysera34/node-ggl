import server from '../../src'
import chai from 'chai'
import chaiHttp from 'chai-http'
const should = chai.should()

chai.use(chaiHttp)

suite('# Route Member Test', () => {
  const member = {
    id: 1,
    email: 'test000@gmail.com',
    name: 'tester000'
  }

  test('test :: post method call', (done) => {
    chai.request(server)
      .post('/api/v1/members')
      .send(member)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })

  test('test :: get all method call', (done) => {
    chai.request(server)
      .get('/api/v1/members')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

  test('test :: get method call', (done) => {
    chai.request(server)
      .get(`/api/v1/members/${member.id}`)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('object')
        res.body.should.have.property('id')
        res.body.should.have.property('id').eql(member.id)
        res.body.should.have.property('email')
        done()
      })
  })

  test('test :: put method call', (done) => {
    chai.request(server)
      .put(`/api/v1/members/${member.id}`)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('object')
        done()
      })
  })
})