module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankStatuses', [{
    id: 1,
    name: 'ONGOING',
  }, {
    id: 2,
    name: 'FINISHED',
  }, {
    id: 3,
    name: 'EXPIRED',
  }], {}),

  down: (queryInterface, { Op }) => queryInterface.bulkDelete('FishtankStatuses', { id: { [Op.in]: [1, 2, 3] } }),
};
