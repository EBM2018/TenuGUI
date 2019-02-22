module.exports = (sequelize, DataTypes) => {
  const FishtankInteraction = sequelize.define('FishtankInteraction', {
    userId: DataTypes.INTEGER,
    fishtankId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    payload: DataTypes.JSON,
  }, {
    timestamps: true,
    updatedAt: false,
  });

  FishtankInteraction.associate = (models) => {
    FishtankInteraction.belongsTo(models.Fishtank, { foreignKey: 'fishtankId' });
  };

  return FishtankInteraction;
};
