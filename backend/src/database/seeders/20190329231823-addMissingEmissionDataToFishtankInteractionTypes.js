module.exports = {
  // bulkUpdate doesn't work
  up: (queryInterface, { Op }) => queryInterface.sequelize.transaction(
    t => queryInterface.bulkDelete('FishtankInteractionTypes', {
      id: { [Op.between]: [1, 5] },
    }, { transaction: t })
      .then(
        () => queryInterface.bulkInsert('FishtankInteractionTypes', [{
          id: 1,
          name: 'ACTIVITY_CHANGE',
          emittableByAdmin: true,
          emittableByParticipant: false,
        }, {
          id: 2,
          name: 'EMERGENCY_PRESS',
          emittableByAdmin: false,
          emittableByParticipant: true,
        }, {
          id: 3,
          name: 'FEEDBACK_SUBMIT',
          emittableByAdmin: false,
          emittableByParticipant: true,
        }, {
          id: 4,
          name: 'COOL_PRESS',
          emittableByAdmin: false,
          emittableByParticipant: true,
        }, {
          id: 5,
          name: 'PERIOD_CHANGE',
          emittableByAdmin: true,
          emittableByParticipant: false,
        }], { transaction: t }),
      ),
  ),
  down: (queryInterface, { Op }) => queryInterface.sequelize.transaction(
    t => queryInterface.bulkDelete('FishtankInteractionTypes', {
      id: { [Op.between]: [1, 5] },
    }, { transaction: t })
      .then(
        () => queryInterface.bulkInsert('FishtankInteractionTypes', [{
          id: 1,
          name: 'ACTIVITY_CHANGE',
          emittableByAdmin: false,
          emittableByParticipant: false,
        }, {
          id: 2,
          name: 'EMERGENCY_PRESS',
          emittableByAdmin: false,
          emittableByParticipant: false,
        }, {
          id: 3,
          name: 'FEEDBACK_SUBMIT',
          emittableByAdmin: false,
          emittableByParticipant: false,
        }, {
          id: 4,
          name: 'COOL_PRESS',
          emittableByAdmin: false,
          emittableByParticipant: false,
        }, {
          id: 5,
          name: 'PERIOD_CHANGE',
          emittableByAdmin: false,
          emittableByParticipant: false,
        }], { transaction: t }),
      ),
  ),
};
