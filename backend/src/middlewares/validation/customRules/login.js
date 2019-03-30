const { body } = require('express-validator/check');
const requestLoader = require('../../requestLoading');

module.exports = {
  post: [
    body('id').custom(requestLoader.addUserToken)
      .withMessage('must be a valid user id'),
  ],
};
