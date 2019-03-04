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
    payload: {
      in: ['body'],
      isJSON: {
        errorMessage: 'must be an object',
      },
    },
  },
};
