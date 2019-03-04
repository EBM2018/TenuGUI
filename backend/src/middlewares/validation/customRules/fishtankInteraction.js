const { param, body } = require('express-validator/check');
const requestLoader = require('../../requestLoading');

module.exports = {
  create: [
    param('fishtankId').custom(requestLoader.addFishtank)
      .withMessage('must be a valid fishtank id'),
    body('type').custom(requestLoader.addFishtankInteractionType)
      .withMessage('must be a valid fishtank interaction type')],
};
