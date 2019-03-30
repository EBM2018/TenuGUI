const { param, body } = require('express-validator/check');
const requestLoader = require('../../requestLoading');
const { isFishtankOngoing } = require('./utils');

module.exports = {
  create: [
    param('fishtankId').custom(requestLoader.addFishtank)
      .withMessage('must be a valid fishtank id')
      .custom(isFishtankOngoing)
      .withMessage('must be an ongoing fishtank'),
    body('type').custom(requestLoader.addFishtankInteractionType)
      .withMessage('must be a valid fishtank interaction type')],
  show: [
    param('fishtankId').custom(requestLoader.addFishtank)
      .withMessage('must be a valid fishtank id'),
  ],
};
