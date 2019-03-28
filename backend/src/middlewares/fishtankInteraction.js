const { checkSchema } = require('express-validator/check');
const User = require('./validation/customRules/common/user.js');
const ValidationSchema = require('./validation/schemas/fishtankInteraction.js');
const CustomRules = require('./validation/customRules/fishtankInteraction.js');
const bail = require('./validation/errorHandler.js');

module.exports = {
  create: [
    User.isAuthenticated,
    bail(401),
    checkSchema(ValidationSchema.create),
    bail(422),
    ...CustomRules.create,
    bail(422),
    User.hasAccess, // TODO: Owner should not be able to make emergency press
    bail(401),
  ],
  show: [
    User.isAuthenticated,
    bail(401),
    checkSchema(ValidationSchema.show),
    bail(422),
    ...CustomRules.show,
    bail(422),
    User.isOwner,
    bail(401),
  ],
};
