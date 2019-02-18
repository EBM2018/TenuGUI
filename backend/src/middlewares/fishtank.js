const { checkSchema, param } = require('express-validator/check');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const CustomValidationsRules = require('./validation/customRules/fishtank.js');
const validationErrorHandler = require('./validation/errorHandler.js');

module.exports = {
  edit: [
    checkSchema(ValidationSchema.edit),
    param('id').custom(CustomValidationsRules.exists.options)
      .withMessage(CustomValidationsRules.exists.errorMessage)
      .custom(CustomValidationsRules.isOngoing.options)
      .withMessage(CustomValidationsRules.isOngoing.errorMessage),
    validationErrorHandler,
  ],
};
