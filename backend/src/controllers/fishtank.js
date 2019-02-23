const { Fishtank, FishtankStatus } = require('../database/models');

module.exports = {
  create: (req, res) => {
    Fishtank.create({
      ownerId: req.user.id,
      shoalId: req.body.shoalId,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    })
      .then(fishtank => res.status(201).send({
        fishtankId: fishtank.id,
      }))
      .catch(() => res.status(500).send());
  },

  show: (req, res) => {
    Fishtank.findByPk(req.params.id, {
      attributes: ['id', 'ownerId', 'shoalId', 'createdAt'], // TODO: Add request processor that adds closedAt field when dealing with a finished fishtank
      include: [{
        model: FishtankStatus,
        attributes: ['name'],
        as: 'status',
      }],
    })
      .then(fishtank => res.status(200).send(fishtank))
      .catch(() => res.status(500).send());
  },

  update: (req, res) => {
    if (req.body.type === Fishtank.editionTypes.FINISH) {
      Fishtank.findByPk(req.params.id)
        .then(fishtank => fishtank.update({
          statusId: FishtankStatus.FINISHED,
          closedAt: Date.now(),
        }))
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    } else res.status(400).send();
  },
};
