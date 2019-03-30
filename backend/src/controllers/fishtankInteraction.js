const { FishtankInteraction, FishtankInteractionType } = require('../database/models');
const { emitNewInteraction, emitFeedback } = require('../websocket');

const socketCreateJob = interactionTypeId => (fishtankId, id) => {
  switch (interactionTypeId) {
    case FishtankInteractionType.ADMIN.FEEDBACK_ASK:
      return emitFeedback(fishtankId, id);
    default:
      return emitNewInteraction(fishtankId);
  }
};

module.exports = {
  create: (req, res) => {
    FishtankInteraction.create({
      fishtankId: req.locals.fishtank.id,
      userId: req.locals.user.id,
      typeId: req.locals.fishtankInteractionType.id,
      payload: req.locals.fishtankInteractionPayload,
    })
      .then((fishtankInteraction) => {
        res.status(201).send();
        return fishtankInteraction;
      })
      .then(({ id, typeId, fishtankId }) => socketCreateJob(typeId)(fishtankId, id))
      .catch(() => res.status(500).send());
  },
  show: (req, res) => {
    FishtankInteraction.getFormattedInteractions(req.locals.fishtank.id)
      .then(interactions => res.status(200).send(interactions));
  },
};
