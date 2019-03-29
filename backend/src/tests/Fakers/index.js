// eslint-disable-next-line import/no-extraneous-dependencies
const rewire = require('rewire');

const requestLoading = rewire('../../middlewares/requestLoading');
// eslint-disable-next-line no-underscore-dangle
const loadRequestWith = requestLoading.__get__('loadRequestWith');

const addUser = (validUsers = []) => async (value, { req }) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (value === validUsers[i].token) {
      loadRequestWith(req, 'user', validUsers[i]);
      return true;
    }
  }
  return false;
};

const addUserById = (validUsers = []) => async (value, { req }) => {
  for (let i = 0; i < validUsers.length; i += 1) {
    if (value === validUsers[i].id) {
      loadRequestWith(req, 'user', { token: validUsers[i].token });
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

const isUserPartOfShoal = (shoalUsers = []) => async (userId) => {
  for (let i = 0; i < shoalUsers.length; i += 1) {
    if (userId === shoalUsers[i].id) return true;
  }
  return false;
};

module.exports = {
  addUser, addUserById, isValidShoal, isUserPartOfShoal,
};
