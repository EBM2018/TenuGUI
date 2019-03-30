const { FishtankInteractionType } = require('../database/models');

const fishtankInteractionTypesList = {
<<<<<<< HEAD
  ACTIVITY_CHANGE: FishtankInteractionType.ACTIVITY_CHANGE,
  EMERGENCY_PRESS: FishtankInteractionType.EMERGENCY_PRESS,
  FEEDBACK_SUBMIT: FishtankInteractionType.FEEDBACK_SUBMIT,
  COOL_PRESS: FishtankInteractionType.COOL_PRESS,
  PERIOD_CHANGE: FishtankInteractionType.PERIOD_CHANGE,
=======
  ADMIN: FishtankInteractionType.ADMIN,
  PARTICIPANT: FishtankInteractionType.PARTICIPANT,
>>>>>>> 98bd6ca4052945b6d2356f4dfd9e5e21519afc8e
};

module.exports = {
  show: (req, res) => res.status(200).send(fishtankInteractionTypesList),
};
