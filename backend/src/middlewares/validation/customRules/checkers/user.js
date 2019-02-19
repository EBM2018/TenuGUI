const { body } = require('express-validator/check');
const { isValidShoal } = require('../../../../__mock_teamy__');
const { Fishtank } = require('../../../../database/models');
const { validateAuthentication } = require('../../../authentication');

const isOwner = async (value, { req }) => {
  const userId = req.user.id;
  const fishtank = await Fishtank.findByPk(req.params.id);
  return fishtank !== null && fishtank.ownerId === userId;
};

module.exports = {
  isAuthenticated: body('token').exists().isJWT().custom(validateAuthentication),
  isOwner: body('token').custom(isOwner),
  isValidShoal: body('shoalId').custom(isValidShoal),
};
