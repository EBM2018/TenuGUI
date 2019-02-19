const { checkSchema } = require('express-validator/check');
const User = require('./validation/customRules/checkers/user.js');
const Shoal = require('./validation/customRules/checkers/shoal.js');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const checkCustomRules = require('./validation/customRules/checkers/fishtank.js');
const bail = require('./validation/errorHandler.js');

module.exports = {
  create: [
    User.isAuthenticated,
    bail(403),
    checkSchema(ValidationSchema.create),
    bail(422),
    Shoal.isValid,
    bail(422),
  ],
  edit: [
    User.isAuthenticated,
    bail(403),
    checkSchema(ValidationSchema.edit),
    bail(422),
    checkCustomRules.edit,
    bail(422),
    User.isOwner,
    bail(403),
  ],
};
