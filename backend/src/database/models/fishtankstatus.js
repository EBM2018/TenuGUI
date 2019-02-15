module.exports = (sequelize, DataTypes) => {
  const FishtankStatus = sequelize.define('FishtankStatus', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  FishtankStatus.ONGOING = 1;
  FishtankStatus.FINISHED = 2;
  FishtankStatus.EXPIRED = 3;

  return FishtankStatus;
};
