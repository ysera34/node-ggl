import { OAuth2Client } from 'google-auth-library'
import credentials from '../configs/credentials.json'
const client = new OAuth2Client(credentials.web.client_id)

export const verifyIdToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
        idToken: token,
    });
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    return payload['email']
  } catch (error) {
    console.error('Error verifying id token: ', error)
    return false
  }
}