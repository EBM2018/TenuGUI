const { checkSchema } = require('express-validator/check');
const FishtankValidationSchema = require('./validationSchemas/fishtank.js');
const validationErrorHandler = require('./validationErrorHandler.js');

module.exports = {
  edit: [
    checkSchema(FishtankValidationSchema.edit),
    validationErrorHandler,
  ],
};
