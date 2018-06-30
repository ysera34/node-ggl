const appdata = require('../../data/appdata');

module.exports = {

  get: (req, res, next) => {
    console.log('users controller get');
  },
  getAll: (req, res, next) => {
    console.log('users controller getAll');
    return res.json(appdata.users);
  },
  add: () => {
    console.log('users controller add');
  },
  update: () => {
    console.log('users controller update');
  },
  remove: () => {
    console.log('users controller remove');
  },
};
