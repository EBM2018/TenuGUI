const { param } = require('express-validator/check');
const { Fishtank, FishtankStatus } = require('../../../database/models/index');

const exists = async (value) => {
  const fishtank = await Fishtank.findByPk(value);
  return fishtank !== null;
};

const isOngoing = async (value) => {
  const fishtank = await Fishtank.findByPk(value);
  return fishtank.statusId === FishtankStatus.ONGOING;
};

module.exports = {
  edit: param('id').custom(exists)
    .withMessage('must be a valid fishtank id')
    .custom(isOngoing)
    .withMessage('must be an ongoing fishtank'),
};
