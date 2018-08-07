module.exports = {
	index: (req, res) => {
		res.render('home');
	},
	about: (req, res) => {
		res.render('about');
	},
	settings: (req, res) => {
		res.render('settings');
	},
	confirm: (req, res) => {
		res.render('confirm');
	},
	notice: (req, res) => {
		res.render('notice');
	},
};
