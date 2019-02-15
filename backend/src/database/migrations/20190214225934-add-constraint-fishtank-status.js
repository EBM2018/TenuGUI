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

  down: queryInterface => queryInterface.removeConstraint('Fishtanks', 'fk_fishtank_status')
    .then(() => queryInterface.removeIndex('Fishtanks', 'fk_fishtank_status')),
};
