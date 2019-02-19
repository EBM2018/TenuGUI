const { body } = require('express-validator/check');
const { Fishtank } = require('../../../../database/models/index');
const { validateAuthentication } = require('../../../authentication/index');

const isOwner = async (value, { req }) => {
  const userId = req.user.id;
  const fishtank = await Fishtank.findByPk(req.params.id);
  return fishtank !== null && fishtank.ownerId === userId;
};

module.exports = {
  isAuthenticated: body('token').exists()
    .withMessage('must be present')
    .isJWT()
    .withMessage('must be a JWT')
    .custom(validateAuthentication)
    .withMessage('must be a valid JWT'),
  isOwner: body('token').custom(isOwner)
    .withMessage('must be the owner'),
};
