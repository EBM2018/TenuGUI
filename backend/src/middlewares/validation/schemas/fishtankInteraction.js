module.exports = {
  create: {
    type: {
      in: ['body'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
      },
      toInt: true,
    },
  },
  show: {},
};
