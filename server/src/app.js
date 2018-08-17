import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'

import * as admin from 'firebase-admin'

import serviceAccount from './configs/firebase-key.json'

import errorHandler from './middleware/errorHandler'

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
})
app.admin = admin

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router)

app.get('*', (req, res, next) => {
  const error = {
    customCode: 404,
    customMessage: 'Not Found'
  }
  next(error)
})

app.use(errorHandler)

export default app;
