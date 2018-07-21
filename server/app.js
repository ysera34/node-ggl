const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up handlebars view engine
app.engine('handlebars', exphbs({
	defaultLayout: '../../client/views/layouts/main',
	partialsDir: 'client/views/partials',
}));
app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'handlebars');

app.use(express.static('client/public'));

require('./routes')(app);
require('./routes/members')(app);

app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
	res.status(500);
	res.render('500');
});

// export default app;
module.exports = app;
