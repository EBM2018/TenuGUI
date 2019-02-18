const { body } = require('express-validator/check');
const {
  isAuthenticated, getUserId, getShoalId, isValidShoal,
} = require('../../../../__mock_teamy__');
const { Fishtank } = require('../../../../database/models');

const isOwner = async (value, { req }) => {
  const userId = await getUserId(value);
  const fishtank = await Fishtank.findByPk(req.params.id);
  return fishtank !== null && fishtank.ownerId === userId;
};

const isPartOfShoal = async (value, { req }) => {
  const shoalId = await getShoalId(value);
  const fishtank = await Fishtank.findByPk(req.params.id);
  return fishtank !== null && fishtank.shoalId === shoalId;
};

module.exports = {
  isAuthenticated: body('token').exists().isJWT().custom(isAuthenticated),
  isOwner: body('token').custom(isOwner),
  isPartOfShoal: body('token').custom(isPartOfShoal),
  isValidShoal: body('shoalId').custom(isValidShoal),
};
