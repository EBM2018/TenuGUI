const { body } = require('express-validator/check');
const { isValidShoal } = require('../../../../services/teamy.js');

module.exports = {
  isValid: body('shoalId').custom(isValidShoal)
    .withMessage('must be a valid shoal'),
};
