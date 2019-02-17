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
};
