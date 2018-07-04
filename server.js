const express = require('express');
const bodyParser = require('body-parser');
const appdata = require('./data/appdata.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up handlebars view engine
const handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	if (!res.locals.partials) res.locals.partials = {};
	res.locals.partials.menuContext = appdata.getNavMenu();
	next();
});

app.use('/', require('./api/routes'));

const routes = require('./api/routes/users');
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

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' +
  app.get('port') + '; press Ctrl + C to terminate.');
});
