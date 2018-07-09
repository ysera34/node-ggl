
exports.index = (req, res) => {
	res.render('../client/views/home');
};

exports.about = (req, res) => {
	res.render('about');
};

exports.settings = (req, res) => {
	res.render('settings');
};
