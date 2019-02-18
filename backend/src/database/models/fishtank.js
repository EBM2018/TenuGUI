module.exports = (sequelize, DataTypes) => {
  const Fishtank = sequelize.define('Fishtank', {
    ownerId: DataTypes.INTEGER,
    shoalId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    closedAt: DataTypes.DATE,
  }, {
    timestamps: true,
    updatedAt: false,
  });

  Fishtank.associate = (models) => {
    Fishtank.belongsTo(models.FishtankStatus, { foreignKey: 'statusId' });
  };

  Fishtank.editionTypes = {
    CHANGE_SETTINGS: 0,
    FINISH: 1,
  };

  return Fishtank;
};
