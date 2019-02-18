const { checkSchema } = require('express-validator/check');
const Auth = require('./validation/customRules/checkers/auth');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const checkCustomRules = require('./validation/customRules/checkers/fishtank.js');
const bail = require('./validation/errorHandler.js');

module.exports = {
  edit: [
    Auth.isAuthenticated,
    bail(403),
    checkSchema(ValidationSchema.edit),
    bail(422),
    checkCustomRules.edit,
    bail(422),
    Auth.isOwner,
    bail(403),
  ],
};
