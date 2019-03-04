const { Fishtank } = require('../../database/models');
const { getUser } = require('../../__mock_teamy__');

const loadRequestWith = (req, key, value) => {
  if (req.locals == null) req.locals = {};
  req.locals[key] = value;
};

module.exports = {
  addFishtank: async (id, { req }) => {
    const fishtank = await Fishtank.findByPk(id);
    if (fishtank == null) return false;
    loadRequestWith(req, 'fishtank', fishtank);
    return true;
  },
  addUser: async (id, { req }) => {
    const user = await getUser(id);
    if (user == null) return false;
    loadRequestWith(req, 'user', user);
    return true;
  },
  loadRequestWith,
};
