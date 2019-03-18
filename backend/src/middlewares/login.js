const { checkSchema } = require('express-validator/check');
const ValidationSchema = require('./validation/schemas/login.js');
const CustomRules = require('./validation/customRules/login.js');
const bail = require('./validation/errorHandler.js');

module.exports = {
  post: [
    checkSchema(ValidationSchema.post),
    bail(422),
    CustomRules.post,
    bail(401),
  ],
};
