const { param, body, oneOf } = require('express-validator/check');
const { FishtankInteractionType } = require('../../../database/models');
const requestLoader = require('../../requestLoading');
const { isFishtankOngoing } = require('./utils');
const User = require('./common/user.js');

module.exports = {
  create: [
    param('fishtankId').custom(requestLoader.addFishtank)
      .withMessage('must be a valid fishtank id')
      .custom(isFishtankOngoing)
      .withMessage('must be an ongoing fishtank'),
    body('type').custom(requestLoader.addFishtankInteractionType)
      .withMessage('must be a valid fishtank interaction type'),
    body('payload').custom(requestLoader.addFishtankInteractionPayload)
      .withMessage('must be a valid payload for selected fishtank interaction type'),
  ],
  show: [
    param('fishtankId').custom(requestLoader.addFishtank)
      .withMessage('must be a valid fishtank id'),
  ],
  checkUserRights: oneOf([[
    body('type').isIn(Object.values(FishtankInteractionType.ADMIN)),
    User.isOwner,
  ], [
    body('type').isIn(Object.values(FishtankInteractionType.PARTICIPANT)),
    User.isParticipant,
  ]]),
};
