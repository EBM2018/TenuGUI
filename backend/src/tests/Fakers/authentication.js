const validate = (validUsers = []) => async (value, { req }) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (value === validUsers[i].token) {
      req.user = validUsers[i];
      return true;
    }
  }
  return false;
};

module.exports = {
  validate,
};
