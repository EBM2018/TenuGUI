const { body } = require('express-validator/check');
const requestLoader = require('../../../requestLoading');
const { isUserPartOfShoal } = require('../../../../__mock_teamy__');

const isOwner = (value, { req }) => req.locals.fishtank.ownerId === req.locals.user.id;

const hasAccess = (value, { req }) => req.locals.user.id === req.locals.fishtank.ownerId
  || isUserPartOfShoal(req.locals.user.id, req.locals.fishtank.shoalId);

module.exports = {
  isAuthenticated: body('token').exists()
    .withMessage('must be present')
    .isJWT()
    .withMessage('must be a JWT')
    .custom(requestLoader.addUser)
    .withMessage('must be a valid JWT'),
  isOwner: body('token').custom(isOwner)
    .withMessage('must be the owner'),
  hasAccess: body('token').custom(hasAccess)
    .withMessage('must have access to the desired fishtank'),
};
