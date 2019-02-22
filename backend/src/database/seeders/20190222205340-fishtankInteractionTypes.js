module.exports = {
  up: queryInterface => queryInterface.bulkInsert('FishtankInteractionTypes', [{
    name: 'ACTIVITY_CHANGE',
  }, {
    name: 'EMERGENCY_PRESS',
  }, {
    name: 'FEEDBACK_SUBMIT',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('FishtankInteractionTypes', null, {})
    .then(() => queryInterface.sequelize.query('ALTER TABLE FishtankInteractionTypes AUTO_INCREMENT = 1')),
};
