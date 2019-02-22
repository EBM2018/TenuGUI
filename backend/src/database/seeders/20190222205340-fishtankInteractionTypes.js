module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankInteractionTypes', [{
    name: 'ACTIVITY_CHANGE',
  }, {
    name: 'EMERGENCY_PRESS',
  }, {
    name: 'FEEDBACK_SUBMIT',
  }], {}),

  down: queryInterface => queryInterface.sequelize.transaction(
    t => queryInterface.bulkDelete('FishtankInteractionTypes', null, { transaction: t })
      .then(
        () => queryInterface.sequelize.query(
          'ALTER TABLE FishtankInteractionTypes AUTO_INCREMENT = 1', { transaction: t },
        ),
      ),
  ),
};
