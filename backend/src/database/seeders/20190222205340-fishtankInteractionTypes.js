module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankInteractionTypes', [{
    id: 1,
    name: 'ACTIVITY_CHANGE',
  }, {
    id: 2,
    name: 'EMERGENCY_PRESS',
  }, {
    id: 3,
    name: 'FEEDBACK_SUBMIT',
  }], {}),

  down: (queryInterface, { Op }) => queryInterface.bulkDelete('FishtankInteractionTypes', { id: { [Op.in]: [1, 2, 3] } }),
};
