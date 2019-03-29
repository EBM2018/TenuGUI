module.exports = (sequelize, DataTypes) => {
  const FishtankInteractionType = sequelize.define('FishtankInteractionType', {
    name: DataTypes.STRING,
    emittableByAdmin: DataTypes.BOOLEAN,
    emittableByParticipant: DataTypes.BOOLEAN,
  }, {
    timestamps: false,
  });

  FishtankInteractionType.ACTIVITY_CHANGE = 1;
  FishtankInteractionType.EMERGENCY_PRESS = 2;
  FishtankInteractionType.FEEDBACK_SUBMIT = 3;
  FishtankInteractionType.COOL_PRESS = 4;
  FishtankInteractionType.PERIOD_CHANGE = 5;

  return FishtankInteractionType;
};
