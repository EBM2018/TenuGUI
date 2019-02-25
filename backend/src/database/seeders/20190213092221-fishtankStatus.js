module.exports = {
  // TODO: I guess I could check if the data already exists before adding it again
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
