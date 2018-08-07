module.exports = (app) => {
  const members = require('../controllers/members');

  app.route('/members')
    .get(members.getAll)
    .post(members.add);

  app.route('/members/:id')
    .get(members.get)
    .put(members.update)
    .delete(members.remove);
};
