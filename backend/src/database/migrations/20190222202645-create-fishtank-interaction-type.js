module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('FishtankInteractionTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        isAlpha: true,
        isUppercase: true,
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('FishtankInteractionTypes'),
};
