import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'

import * as admin from 'firebase-admin'

import serviceAccount from './configs/firebase-key.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router)

app.admin = admin

export default app;
