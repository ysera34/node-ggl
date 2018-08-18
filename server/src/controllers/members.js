import { asyncWithException } from '../helpers'
import { verifyIdToken as verifyGoogleIdToken } from '../helpers/googleAuth'
import { signToken, verifyIdToken } from '../helpers/auth'
import { createCustomTokenAsyncAwait, verifyIdTokenAsyncAwait } from '../helpers/firebaseAdminAuth'
import path from 'path'
import models from '../database'

const members = {}

members.signUp = asyncWithException(async(req, res, next) => {

  const googlePayload = await verifyGoogleIdToken(req, next)
  const member = await models.members.create({
    email: googlePayload['email'],
  }).catch(next(error))

  const payload = { email: member.email }
  const authToken = await signToken(payload)

  res.status(201).json({
    data: {
      authToken
    }
  })
})

members.signIn = asyncWithException(async(req, res, next) => {
  // auth token validation expire and refresh
})

members.createFirebaseAdminAuth = asyncWithException(async(req, res, next) => {
  const email = req.body.email
  console.log('controller createAuth post param email', email)
  const token = await createCustomTokenAsyncAwait(email) 
  console.log('controller createAuth customToken', token)
  res.json({ token })
})

members.verifyIdToken = asyncWithException(async(req, res, next) => {
  const token = req.body.token
  console.log('controller signIn post param token', token)
  const email = await verifyIdTokenAsyncAwait(token)
  console.log('controller signIn email', email)
  res.json({ email })
})

members.getAll = asyncWithException(async(req, res, next) => {
  res.send('hello members getAll')
  // const attributes = ['id', 'email', 'name']
  // const members = await models.members.findAll({ attributes })
  // res.json(members)
})

members.get = asyncWithException(async(req, res, next) => {
  res.send('hello members get')
  // const attributes = ['id', 'email', 'name']
  // const options = {
  //   where: {
  //     id: req.params.id,
  //   },
  //   attributes,
  // }
  // const members = await models.members.findOne(options)
  // res.json(members)
})

members.create = asyncWithException(async(req, res, next) => {
  res.send('hello members create')
})

members.update = asyncWithException(async(req, res, next) => {
  res.send('hello members update')
})

members.signTest = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../../client', 'google-sign-in-test.html'))
}

export default members