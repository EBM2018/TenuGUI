module.exports = {
  up: (queryInterface, { Op }) => queryInterface.sequelize.transaction(
    t => queryInterface.bulkUpdate('FishtankInteractionTypes', {
      emittableByAdmin: false,
      emittableByParticipant: true,
    }, {
      id: { [Op.in]: [2, 3, 4] },
    }, { transaction: t })
      .then(
        () => queryInterface.bulkUpdate('FishtankInteractionTypes', {
          emittableByAdmin: true,
          emittableByParticipant: false,
        }, {
          id: { [Op.in]: [1, 5] },
        }, { transaction: t }),
      ),
  ),
  down: (queryInterface, { Op }) => queryInterface.bulkUpdate('FishtankInteractionTypes', {
    emittableByAdmin: false,
    emittableByParticipant: false,
  }, {
    id: { [Op.between]: [1, 5] },
  }),
};
