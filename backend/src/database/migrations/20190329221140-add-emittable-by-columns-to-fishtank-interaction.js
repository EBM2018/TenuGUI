module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(
    t => queryInterface.addColumn('FishtankInteractionTypes', 'emittableByAdmin',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      { transaction: t })
      .then(
        () => queryInterface.addColumn('FishtankInteractionTypes', 'emittableByParticipant',
          {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          { transaction: t }),
      ),
  ),
  down: queryInterface => queryInterface.sequelize.transaction(
    t => queryInterface.removeColumn('FishtankInteractionTypes', 'emittableByAdmin', { transaction: t })
      .then(() => queryInterface.removeColumn('FishtankInteractionTypes', 'emittableByParticipant', { transaction: t })),
  ),
};
