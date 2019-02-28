const { param } = require('express-validator/check');
const requestLoader = require('../../requestLoading');
const { FishtankStatus } = require('../../../database/models');

const isOngoing = (value, { req }) => req.fishtank.statusId === FishtankStatus.ONGOING;

module.exports = {
  show: param('fishtankId').custom(requestLoader.addFishtank)
    .withMessage('must be a valid fishtank id'),
  update: param('fishtankId').custom(requestLoader.addFishtank)
    .withMessage('must be a valid fishtank id')
    .custom(isOngoing)
    .withMessage('must be an ongoing fishtank'),
};
