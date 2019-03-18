module.exports = {
  post: {
    id: {
      in: ['body'],
      isInt: {
        options: { min: 1 },
        errorMessage: 'must be a positive integer',
      },
      toInt: true,
    },
  },
};
