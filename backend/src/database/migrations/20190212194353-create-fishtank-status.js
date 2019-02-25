module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('FishtankStatuses', {
    id: {
      allowNull: false,
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
  down: queryInterface => queryInterface.dropTable('FishtankStatuses'),
};
