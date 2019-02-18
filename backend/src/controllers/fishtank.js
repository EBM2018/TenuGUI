const { Fishtank, FishtankStatus } = require('../database/models');

module.exports = {
  create: (req, res) => {
    Fishtank.create({
      ownerId: 0,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });
    res.status(201).send();
  },
  read: (req, res) => res.send(`Hello, ${req.params.id}!`),
  edit: (req, res) => {
    if (req.body.type === Fishtank.editionTypes.FINISH) {
      Fishtank.findByPk(req.params.id)
        .then(fishtank => fishtank.update({
          statusId: FishtankStatus.FINISHED,
          closedAt: Date.now(),
        }))
        .then(() => res.status(200).send());
    } else res.status(400).send();
  },
};
