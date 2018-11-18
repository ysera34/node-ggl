import app from '../app'

export const createCustomToken = (uid) => {
  app.admin.auth().createCustomToken(uid)
    .then((customToken) => {
      console.log('customToken', customToken)
      return customToken
    })
    .catch((error) => {
      console.error('Error creating custom token:', error)
      return false
    })
}

export const createCustomTokenAsyncAwait = async (uid) => {
  try {
    const customToken = await app.admin.auth().createCustomToken(uid)
    console.log('customToken', customToken)
    return customToken
  } catch (error) {
    console.error('Error creating cusotm token: ', error)
    return false
  }
}

export const verifyIdToken = (idToken) => {
  app.admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log('decodedToken', decodedToken)
      const uid = decodedToken.uid
      console.log('uid', uid)
      return uid
    })
    .catch((error) => {
      console.error('Error verifying id token:', error)
      return false
    })
}

export const verifyIdTokenAsyncAwait = async (idToken) => {
  try {
    const decodedToken = await app.admin.auth().verifyIdToken(idToken)
    console.log('decodedToken', decodedToken)
    const uid = decodedToken.uid
    console.log('uid', uid)
    return uid
  } catch (error) {
    console.error('Error verifying id token:', error)
    return false
  }
}
