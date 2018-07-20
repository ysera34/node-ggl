const appdata = require('../data/appdata');

module.exports = {

  get: (req, res, next) => {
    console.log('members controller get');
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
    const { members } = appdata;
    let member = members.filter(member => member.id === id)[0]
    if (!member) {
      return res.status(400).json({error: 'Unknown member'})
    }
    return res.json(member);
  },
  getAll: (req, res, next) => {
    console.log('members controller getAll');
    return res.json(appdata.members);
  },
  add: (req, res, next) => {
    console.log('members controller add');
    const name =  req.body.name || '';
    if (!name.length) {
      return res.status(400).json({error: 'Incorrect name'});
    }
    const { members } = appdata;
    const id = members.reduce((maxId, member) => {
      return member.id > maxId ? member.id : maxId
    }, 0) + 1;
    const newmember = {
      id,
      name,
    };
    members.push(newmember);
    return res.status(201).json(newmember);
  },
  update: () => {
    console.log('members controller update');
  },
  remove: (req, res, next) => {
    console.log('members controller remove');
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
    const { members } = appdata;
    const memberIndex = members.findIndex(member => {
      return member.id === id;
    });
    if (memberIndex === -1) {
      return res.status(404).json({error: 'Unknown member'});
    }
    members.splice(memberIndex, 1);
    res.status(204).send();
  },
};
