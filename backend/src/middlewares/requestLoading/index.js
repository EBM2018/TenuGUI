const { Fishtank } = require('../../database/models');
const { getUser } = require('../../__mock_teamy__');

module.exports = {
  addFishtank: async (id, { req }) => {
    const fishtank = await Fishtank.findByPk(id);
    if (fishtank == null) return false;
    req.fishtank = fishtank;
    return true;
  },
  addUser: async (id, { req }) => {
    const user = await getUser(id);
    if (user == null) return false;
    req.user = user;
    return true;
  },
};
