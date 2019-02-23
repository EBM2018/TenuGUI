const { body } = require('express-validator/check');
const { isValidShoal } = require('../../../../__mock_teamy__');

module.exports = {
  isValid: body('shoalId').custom(isValidShoal)
    .withMessage('must be a valid shoal'),
};
