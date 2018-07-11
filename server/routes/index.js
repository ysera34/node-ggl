module.exports = (app) => {
	const controller = require('../controllers');
	const appdata = require('../data/appdata');

	app.use(function(req, res, next) {
		if (!res.locals.partials) res.locals.partials = {};
		res.locals.partials.menuContext = appdata.getNavMenu();
		next();
	});

	app.route('/')
		.get(controller.index);

	app.route('/about')
		.get(controller.about);

	app.route('/settings')
		.get(controller.settings);

	app.route('/confirm')
		.get(controller.confirm);

	app.route('/notice')
		.get(controller.notice);
};
