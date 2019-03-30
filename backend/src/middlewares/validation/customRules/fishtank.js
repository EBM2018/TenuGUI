const { param } = require('express-validator/check');
const requestLoader = require('../../requestLoading');
const { isFishtankOngoing } = require('./utils');

module.exports = {
  show: param('fishtankId').custom(requestLoader.addFishtank)
    .withMessage('must be a valid fishtank id'),
  update: param('fishtankId').custom(requestLoader.addFishtank)
    .withMessage('must be a valid fishtank id')
    .custom(isFishtankOngoing)
    .withMessage('must be an ongoing fishtank'),
};
