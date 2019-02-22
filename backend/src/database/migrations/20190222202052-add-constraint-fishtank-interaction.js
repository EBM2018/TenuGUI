module.exports = {
  up: queryInterface => queryInterface.addConstraint('FishtankInteractions', ['fishtankId'], {
    type: 'foreign key',
    name: 'fk_fishtank_interaction',
    references: {
      table: 'Fishtanks',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: queryInterface => queryInterface.removeConstraint('FishtankInteractions', 'fk_fishtank_interaction')
    .then(() => queryInterface.removeIndex('FishtankInteractions', 'fk_fishtank_interaction')),
};
