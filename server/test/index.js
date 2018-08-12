import http from 'http'
import chai from 'chai'
import { validate } from './middlewares/validate'
const assert = chai.assert

suite('# Start Node Server', () => {
  test('should return 200', done => {
    http.get('http://127.0.0.1:3000/api/v1', res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
})

suite('# Validation Check', () => {
  test('check email validation', () => {
    const result = validate({ email: 'test@email.com' })
    assert.equal(result, true)
  })
})