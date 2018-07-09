const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const appdata = require('./data/appdata.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// set up handlebars view engine


app.engine('handlebars', exphbs({
	layoutsDir: 'client/views',
	defaultLayout: 'layouts/main',
	partialsDir: 'client/views/partials',
}));
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, '../client/views'))

app.use(express.static('client/public'));

app.use(function(req, res, next) {
	if (!res.locals.partials) res.locals.partials = {};
	res.locals.partials.menuContext = appdata.getNavMenu();
	next();
});

app.use('/', require('./routes'));

const routes = require('./routes/users');
routes(app);

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
