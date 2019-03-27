const { getUsers } = require('../services/teamy.js');

module.exports = {
  show: async (req, res) => {
    const users = await getUsers();
    return res.status(200).send(users);
  },
};
