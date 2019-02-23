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

  down: queryInterface => queryInterface.sequelize.transaction(
    t => queryInterface.removeConstraint('FishtankInteractions', 'fk_fishtank_interaction_type', { transaction: t })
      .then(() => queryInterface.removeIndex('FishtankInteractions', 'fk_fishtank_interaction_type', { transaction: t })),
  ),
};
