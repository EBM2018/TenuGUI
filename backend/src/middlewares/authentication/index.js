const { getUser } = require('../../__mock_teamy__');

module.exports = {
  validateAuthentication: async (value, { req }) => {
    const user = await getUser(value);
    if (user === null) return false;
    req.user = user;
    return true;
  },
};
