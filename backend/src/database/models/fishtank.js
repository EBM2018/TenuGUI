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

<<<<<<< HEAD
  Fishtank.getShoalFishtanks = async (shoalId) => {
=======
  Fishtank.getOngoingShoalFishtanks = async (shoalId) => {
>>>>>>> 98bd6ca4052945b6d2356f4dfd9e5e21519afc8e
    const fishtanks = await Fishtank.findAll({
      attributes: ['id'],
      where: {
        shoalId,
<<<<<<< HEAD
=======
        statusId: sequelize.models.FishtankStatus.ONGOING,
>>>>>>> 98bd6ca4052945b6d2356f4dfd9e5e21519afc8e
      },
    });

    const fishtankIds = [];
    for (let i = 0; i < fishtanks.length; i += 1) fishtankIds.push(fishtanks[i].id);
    return { fishtankIds };
  };

  Fishtank.editionTypes = {
    CHANGE_SETTINGS: 0,
    FINISH: 1,
  };

  return Fishtank;
};
