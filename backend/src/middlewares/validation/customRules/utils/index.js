const { FishtankStatus } = require('../../../../database/models');

module.exports = {
  isFishtankOngoing: (value, { req }) => req.locals.fishtank.statusId === FishtankStatus.ONGOING,
};
