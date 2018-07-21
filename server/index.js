// import app from './app';
// import config from './configs';
const app = require('./app');
const configs = require('./configs');

const port = configs.port;

app.listen(port, () => {
  console.log('Express started on http://localhost:' +
  port + '; press Ctrl + C to terminate.');
});
