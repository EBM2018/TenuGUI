const { Fishtank, FishtankInteractionType } = require('../../database/models');
const { getUser, getUserToken } = require('../../__mock_teamy__');

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
  addUser: async (token, { req }) => {
    const user = await getUser(token);
    if (user == null) return false;
    loadRequestWith(req, 'user', user);
    return true;
  },
  addUserById: async (id, { req }) => {
    const token = await getUserToken(id);
    if (token == null) return false;
    loadRequestWith(req, 'user', { token });
    return true;
  },
  addFishtankInteractionType: async (id, { req }) => {
    const fishtankInteractionType = await FishtankInteractionType.findByPk(id);
    if (fishtankInteractionType == null) return false;
    loadRequestWith(req, 'fishtankInteractionType', fishtankInteractionType);
    return true;
  },
  loadRequestWith,
};
