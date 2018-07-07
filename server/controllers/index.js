
exports.index = (req, res) => {
	res.render('home');
};

exports.about = (req, res) => {
	res.render('about');
};

exports.settings = (req, res) => {
	res.render('settings');
};
