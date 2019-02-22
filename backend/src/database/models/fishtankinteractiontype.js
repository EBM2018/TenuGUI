module.exports = (sequelize, DataTypes) => {
  const FishtankInteractionType = sequelize.define('FishtankInteractionType', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  FishtankInteractionType.ACTIVITY_CHANGE = 1;
  FishtankInteractionType.EMERGENCY_PRESS = 2;
  FishtankInteractionType.FEEDBACK_SUBMIT = 3;

  return FishtankInteractionType;
};
