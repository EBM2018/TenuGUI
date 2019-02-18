const { checkSchema, param } = require('express-validator/check');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const checkCustomRules = require('./validation/customRules/checkers/fishtank.js');
const validationErrorHandler = require('./validation/errorHandler.js');

module.exports = {
  edit: [
    checkSchema(ValidationSchema.edit),
    checkCustomRules.edit,
    validationErrorHandler,
  ],
};
