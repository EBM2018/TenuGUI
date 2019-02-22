module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankStatuses', [{
    name: 'ONGOING',
  }, {
    name: 'FINISHED',
  }, {
    name: 'EXPIRED',
  }], {}),

  down: queryInterface => queryInterface.sequelize.transaction(
    t => queryInterface.bulkDelete('FishtankStatuses', null, { transaction: t })
      .then(
        () => queryInterface.sequelize.query(
          'ALTER TABLE FishtankStatuses AUTO_INCREMENT = 1', { transaction: t },
        ),
      ),
  ),
};
