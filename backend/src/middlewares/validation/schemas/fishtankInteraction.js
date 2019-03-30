module.exports = {
  create: {
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
};
