const Sequelize = require('sequelize');
const configs = require('../configs');
const members = require('./members');

const database = configs.database;

const sequelize = new Sequelize({
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  },
  timezone: '+09:00',
  query: { raw: true},
  // hooks: {}
});

const members = sequelize.define(members);

// members.sync({force: true}).then(() => {
//   return members.create({{
//
//   }})
// });

module.export = {
  sequelize,
  members,
};
