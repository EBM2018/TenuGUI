const { Fishtank, FishtankStatus } = require('../../../../database/models/index');

/* Schemas don't support multiple custom rules yet so
 * these are written in the right format for schemas
 * but are currently used in the common methods
 * (see ../../fishtank.js)
 */
module.exports = {
  exists: {
    options: async (value) => {
      const fishtank = await Fishtank.findByPk(value);
      return fishtank !== null;
    },
    errorMessage: "doesn't exist",
  },
  isOngoing: {
    options: async (value) => {
      const fishtank = await Fishtank.findByPk(value);
      return fishtank.statusId === FishtankStatus.ONGOING;
    },
    errorMessage: 'already over',
  },
};
