const { checkSchema } = require('express-validator/check');
const User = require('./validation/customRules/common/user.js');
const Shoal = require('./validation/customRules/common/shoal.js');
const ValidationSchema = require('./validation/schemas/fishtank.js');
const CustomRules = require('./validation/customRules/fishtank.js');
const bail = require('./validation/errorHandler.js');

module.exports = {
  create: [
    User.isAuthenticated,
    bail(401),
    checkSchema(ValidationSchema.create),
    bail(422),
    Shoal.isValid,
    bail(422),
  ],
  show: [
    User.isAuthenticated,
    bail(401),
    checkSchema(ValidationSchema.show),
    bail(422),
    CustomRules.show,
    bail(422),
    User.hasAccess,
    bail(401),
  ],
  index: [
    User.isAuthenticated,
    bail(401),
  ],
  update: [
    User.isAuthenticated,
    bail(401),
    checkSchema(ValidationSchema.update),
    bail(422),
    CustomRules.update,
    bail(422),
    User.isOwner,
    bail(401),
  ],
};

// TODO: Add translation strings for validation error messages
