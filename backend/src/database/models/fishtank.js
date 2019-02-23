const { formatDate } = require('../../services/formatter.js');

module.exports = (sequelize, DataTypes) => {
  const Fishtank = sequelize.define('Fishtank', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shoalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get() {
        return formatDate(this.getDataValue('createdAt'));
      },
    },
    closedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      get() {
        return formatDate(this.getDataValue('closedAt'));
      },
    },
  }, {
    timestamps: true,
    updatedAt: false,
  });

  Fishtank.associate = (models) => {
    Fishtank.belongsTo(models.FishtankStatus, {
      foreignKey: 'statusId',
      as: 'status',
    });
  };

  Fishtank.editionTypes = {
    CHANGE_SETTINGS: 0,
    FINISH: 1,
  };

  return Fishtank;
};
