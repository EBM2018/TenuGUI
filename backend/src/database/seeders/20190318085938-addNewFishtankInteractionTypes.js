module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankInteractionTypes', [{
    id: 4,
    name: 'COOL_PRESS',
  }, {
    id: 5,
    name: 'PERIOD_CHANGE',
  }], {}),

  down: (queryInterface, { Op }) => queryInterface.bulkDelete('FishtankInteractionTypes', { id: { [Op.in]: [4, 5] } }),
};
