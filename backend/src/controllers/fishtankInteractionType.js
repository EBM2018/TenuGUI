const { FishtankInteractionType } = require('../database/models');

const fishtankInteractionTypesList = {
  ADMIN: FishtankInteractionType.ADMIN,
  PARTICIPANT: FishtankInteractionType.PARTICIPANT,
};

module.exports = {
  show: (req, res) => res.status(200).send(fishtankInteractionTypesList),
};
