module.exports = {
  up: queryInterface => queryInterface.addConstraint('FishtankInteractions', ['typeId'], {
    type: 'foreign key',
    name: 'fk_fishtank_interaction_type',
    references: {
      table: 'FishtankInteractionTypes',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: queryInterface => queryInterface.removeConstraint('FishtankInteractions', 'fk_fishtank_interaction_type')
    .then(() => queryInterface.removeIndex('FishtankInteractions', 'fk_fishtank_interaction_type')),
};
