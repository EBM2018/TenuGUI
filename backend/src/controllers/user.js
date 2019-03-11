const { getUsers } = require('../__mock_teamy__');

module.exports = {
  show: async (req, res) => {
    const users = await getUsers();
    return res.status(200).send(users);
  },
};
