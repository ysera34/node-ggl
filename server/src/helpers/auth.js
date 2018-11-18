import jwt from 'jsonwebtoken'
import configs from '../configs'

export const signToken = (payload) => {
  const authToken = jwt.sign(payload, configs.secret, {
    expiresIn: '1d'
  })
  console.log('signToken', authToken)
  return authToken
}

export const verifyToken = async (authToken) => {
  const decoded = await jwt.verify(authToken, configs.secret)
  console.log('decoded', decoded)
  return decoded
}