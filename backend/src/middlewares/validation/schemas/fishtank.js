const { Fishtank } = require('../../../database/models');

module.exports = {
  create: {
    shoalId: {
      in: ['body'],
      isInt: true,
      toInt: true,
    },
  },
  edit: {
    id: {
      in: ['params'],
      isInt: true,
      toInt: true,
    },
    type: {
      in: ['body'],
      isInt: {
        options: true,
        errorMessage: 'must be an integer',
      },
      isIn: {
        options: [Object.values(Fishtank.editionTypes).map(x => x.toString())],
        errorMessage: 'must be a valid type',
      },
      toInt: true,
      // TODO: add validation for to-be content when changing settings
    },
  },
};
