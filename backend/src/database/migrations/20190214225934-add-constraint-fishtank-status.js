module.exports = {
  up: queryInterface => queryInterface.addConstraint('Fishtanks', ['statusId'], {
    type: 'foreign key',
    name: 'fk_fishtank_status',
    references: {
      table: 'FishtankStatuses',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: queryInterface => queryInterface.sequelize.transaction(
    t => queryInterface.removeConstraint('Fishtanks', 'fk_fishtank_status', { transaction: t })
      .then(() => queryInterface.removeIndex('Fishtanks', 'fk_fishtank_status', { transaction: t })),
  ),
};
