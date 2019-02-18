const { checkSchema } = require('express-validator/check');
const Guards = require('./guards');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const checkCustomRules = require('./validation/customRules/checkers/fishtank.js');
const validationErrorHandler = require('./validation/errorHandler.js');

module.exports = {
  edit: [
    Guards.isAuthenticated,
    Guards.isOwner,
    checkSchema(ValidationSchema.edit),
    checkCustomRules.edit,
    validationErrorHandler,
  ],
};
