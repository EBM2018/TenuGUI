const { Fishtank, FishtankStatus } = require('../database/models');
const { getRequestUrl } = require('../services/formatter.js');
const { createSocketsNameSpaceForFishtank } = require('../websocket');

module.exports = {
  create: (req, res) => {
    Fishtank.create({
      ownerId: req.locals.user.id,
      shoalId: req.body.shoalId,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    })
      .then((fishtank) => {
        res.status(201).send({
          fishtankId: fishtank.id,
          url: `${getRequestUrl(req)}/api/fishtanks/${fishtank.id}`,
        });
        return fishtank;
      })
      .then((fishtank) => {
        createSocketsNameSpaceForFishtank(fishtank.id);
      })
      .catch(() => res.status(500).send());
  },

  show: (req, res) => {
    Fishtank.findByPk(req.locals.fishtank.id, {
      attributes: ['id', 'ownerId', 'shoalId', 'createdAt'], // TODO: Add request processor that adds closedAt field when dealing with a finished fishtank
      include: [{
        model: FishtankStatus,
        attributes: ['name'],
        as: 'status',
      }],
    })
      .then(fishtank => res.status(200).send({
        fishtank,
        interactions: `${getRequestUrl(req)}/api/fishtanks/${req.locals.fishtank.id}/interactions`,
      }))
      .catch(() => res.status(500).send());
  },

  update: (req, res) => {
    if (req.body.type === Fishtank.editionTypes.FINISH) {
      Fishtank.findByPk(req.locals.fishtank.id)
        .then(fishtank => fishtank.update({
          statusId: FishtankStatus.FINISHED,
          closedAt: Date.now(),
        }))
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    } else res.status(400).send();
  },
};
