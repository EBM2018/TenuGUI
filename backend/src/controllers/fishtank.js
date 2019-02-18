const { Fishtank, FishtankStatus } = require('../database/models');
const { getUserId } = require('../__mock_teamy__');

module.exports = {
  create: async (req, res) => {
    Fishtank.create({
      ownerId: await getUserId(req.body.token),
      shoalId: req.body.shoalId,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    }).then(fishtank => res.status(201).send({
      fishtankId: fishtank.id,
    }));
  },
  // TODO: Should send basic Fishtank info along with current activity info
  read: (req, res) => res.send([]),
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
