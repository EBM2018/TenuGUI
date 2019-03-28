const { Fishtank } = require('../../../database/models');

module.exports = {
  create: {
    shoalId: {
      in: ['body'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
      },
      toInt: true,
    },
  },
  show: {
    fishtankId: {
      in: ['params'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
      },
      toInt: true,
    },
  },
  update: {
    fishtankId: {
      in: ['params'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
      },
      toInt: true,
    },
    type: {
      in: ['body'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
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
