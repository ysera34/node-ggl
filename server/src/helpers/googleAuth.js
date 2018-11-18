import { OAuth2Client } from 'google-auth-library'
import credentials from '../configs/credentials.json'
const client = new OAuth2Client(credentials.web.client_id)

export const verifyIdToken = async (req, next) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.idToken,
    })
    const payload = ticket.getPayload()
    console.log('payload', payload)
    return payload
  } catch (error) {
    console.error('Error verifying id token: ', error)
    next(error)
  }
}