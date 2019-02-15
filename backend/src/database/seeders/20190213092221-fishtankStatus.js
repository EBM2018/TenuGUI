module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankStatuses', [{
    name: 'ONGOING',
  }, {
    name: 'FINISHED',
  }, {
    name: 'EXPIRED',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('FishtankStatuses', null, {})
    .then(() => queryInterface.sequelize.query('ALTER TABLE FishtankStatuses AUTO_INCREMENT = 1')),
};
