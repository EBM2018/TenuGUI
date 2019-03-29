// eslint-disable-next-line import/no-extraneous-dependencies
const rewire = require('rewire');

const requestLoading = rewire('../../middlewares/requestLoading');
// eslint-disable-next-line no-underscore-dangle
const loadRequestWith = requestLoading.__get__('loadRequestWith');

const getUser = (validUsers = []) => async (token) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (token === validUsers[i].token) return validUsers[i];
  }
  return null;
};

const getUserToken = (validUsers = []) => async (id) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (id === validUsers[i].id) return validUsers[i].token;
  }
  return null;
};

const addUser = (validUsers = []) => async (value, { req }) => {
  const user = await getUser(validUsers)(value);
  if (user == null) return false;
  loadRequestWith(req, 'user', user);
  return true;
};

const addUserToken = (validUsers = []) => async (value, { req }) => {
  const token = await getUserToken(validUsers)(value);
  if (token == null) return false;
  loadRequestWith(req, 'user', { token });
  return true;
};

const isValidShoal = (validShoals = []) => async (shoalId) => {
  for (let i = 0; i < validShoals.length; i += 1) {
    if (shoalId === validShoals[i]) return true;
  }
  return false;
};

const isUserPartOfShoal = (shoalUsers = []) => async (userId) => {
  for (let i = 0; i < shoalUsers.length; i += 1) {
    if (userId === shoalUsers[i].id) return true;
  }
  return false;
};

module.exports = {
  addUser, addUserToken, isValidShoal, isUserPartOfShoal, getUser, getUserToken,
};
