const addUser = (validUsers = []) => async (value, { req }) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (value === validUsers[i].token) {
      req.user = validUsers[i];
      return true;
    }
  }
  return false;
};

const isValidShoal = (validShoals = []) => async (shoalId) => {
  for (let i = 0; i < validShoals.length; i += 1) {
    if (shoalId === validShoals[i]) return true;
  }
  return false;
};

module.exports = {
  addUser, isValidShoal,
};
