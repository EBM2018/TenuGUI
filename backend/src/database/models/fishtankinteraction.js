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
  FishtankInteraction.associate = () => {
    // associations can be defined here
  };
  return FishtankInteraction;
};
