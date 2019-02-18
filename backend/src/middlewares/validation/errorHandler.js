const { validationResult } = require('express-validator/check');

const bail = (req, res, next, code) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(code).json({ errors: errors.array() });
  return next();
};

module.exports = code => (req, res, next) => bail(req, res, next, code); // Nymous will be proud
