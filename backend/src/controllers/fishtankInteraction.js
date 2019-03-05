const { FishtankInteraction } = require('../database/models');
const { emitNewInteraction } = require('../websocket');

module.exports = {
  create: (req, res) => {
    FishtankInteraction.create({
      fishtankId: req.locals.fishtank.id,
      userId: req.locals.user.id,
      typeId: req.body.type,
      payload: {},
    })
      .then((fishtankInteraction) => {
        res.status(201).send();
        return fishtankInteraction;
      })
      .then(fishtankInteraction => emitNewInteraction(fishtankInteraction.fishtankId))
      .catch(() => res.status(500).send());
  },
  show: (req, res) => {
    FishtankInteraction.getFormattedInteractions(req.locals.fishtank.id)
      .then(interactions => res.status(200).send(interactions));
  },
};
