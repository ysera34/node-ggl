const appdata = require('../../data/appdata');

module.exports = {

  get: (req, res, next) => {
    console.log('users controller get');
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
    const { users } = appdata;
    let user = users.filter(user => user.id === id)[0]
    if (!user) {
      return res.status(400).json({error: 'Unknown user'})
    }
    return res.json(user);
  },
  getAll: (req, res, next) => {
    console.log('users controller getAll');
    return res.json(appdata.users);
  },
  add: (req, res, next) => {
    console.log('users controller add');
    const name =  req.body.name || '';
    if (!name.length) {
      return res.status(400).json({error: 'Incorrect name'});
    }
    const { users } = appdata;
    const id = users.reduce((maxId, user) => {
      return user.id > maxId ? user.id : maxId
    }, 0) + 1;
    const newUser = {
      id,
      name,
    };
    users.push(newUser);
    return res.status(201).json(newUser);
  },
  update: () => {
    console.log('users controller update');
  },
  remove: (req, res, next) => {
    console.log('users controller remove');
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
    const { users } = appdata;
    const userIndex = users.findIndex(user => {
      return user.id === id;
    });
    if (userIndex === -1) {
      return res.status(404).json({error: 'Unknown user'});
    }
    users.splice(userIndex, 1);
    res.status(204).send();
  },
};
