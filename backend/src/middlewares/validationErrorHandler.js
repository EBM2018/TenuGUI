const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });
  next();
};
