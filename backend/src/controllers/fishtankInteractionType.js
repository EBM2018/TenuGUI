const { FishtankInteractionType } = require('../database/models');

const fishtankInteractionTypesList = {
  ACTIVITY_CHANGE: FishtankInteractionType.ACTIVITY_CHANGE,
  EMERGENCY_PRESS: FishtankInteractionType.EMERGENCY_PRESS,
  FEEDBACK_SUBMIT: FishtankInteractionType.FEEDBACK_SUBMIT,
};

module.exports = {
  show: (req, res) => res.status(200).send(fishtankInteractionTypesList),
};
