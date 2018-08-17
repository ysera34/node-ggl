import configs from '../configs'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {

  const authToken = req.headers['auth-token']
  if (authToken) {
    jwt.verify(authToken, configs.secret, (err, decoded) => {
      if (err) {
        err.customCode = 401
        err.customMessage = 'unauthorized'
        next(err)
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    const error = {
      customCode: 403,
      customMessage: 'auth token should be required'
    }
    next(error)
  }
}