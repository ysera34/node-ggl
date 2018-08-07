import http from 'http'
import chai from 'chai'
import { validate } from './middlewares/validate'
const assert = chai.assert

// import '../src/index.js'

// suite('#Example Node Server', () => {
//   test('should return 200', done => {
//     http.get('http://127.0.0.1:1337', res => {
//       assert.equal(200, res.statusCode)
//       done()
//     })
//   })
// })

suite('# Validation Check', () => {
  test('check email validation', () => {
    const result = validate({ email: 'test@email.com' })
    assert.equal(result, true)
  })
})