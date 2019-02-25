module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('FishtankInteractions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fishtankId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    typeId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    payload: {
      allowNull: false,
      type: Sequelize.JSON,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('FishtankInteractions'),
};
