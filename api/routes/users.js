module.exports = (app) => {
  const users = require('../controllers/users');

  app.route('/users')
    .get(users.getAll)
    .post(users.add);

  app.route('/users/:id')
    .get(users.get)
    .put(users.update)
    .delete(users.remove);
};
