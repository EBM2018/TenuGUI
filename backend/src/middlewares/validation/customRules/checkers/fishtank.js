const { param } = require('express-validator/check');
const Rules = require('../schemas/fishtank.js');

module.exports = {
  edit: param('id').custom(Rules.exists.options)
    .withMessage(Rules.exists.errorMessage)
    .custom(Rules.isOngoing.options)
    .withMessage(Rules.isOngoing.errorMessage),
};