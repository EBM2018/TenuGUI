const { formatDate } = require('../../services/formatter.js');

module.exports = (sequelize, DataTypes) => {
  const FishtankInteraction = sequelize.define('FishtankInteraction', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fishtankId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get() {
        return formatDate(this.getDataValue('createdAt'));
      },
    },
  }, {
    timestamps: true,
    updatedAt: false,
  });

  FishtankInteraction.associate = (models) => {
    FishtankInteraction.belongsTo(models.Fishtank, {
      foreignKey: 'fishtankId',
      as: 'fishtank',
    });
    FishtankInteraction.belongsTo(models.FishtankInteractionType, {
      foreignKey: 'typeId',
      as: 'type',
    });
  };

  FishtankInteraction.getFormattedInteractions = (fishtankId) => {
    const { FishtankInteractionType } = sequelize.models;
    const { Op } = sequelize;
    const countsKeys = {
      [FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS]: 'emergencyPressesCount',
      [FishtankInteractionType.PARTICIPANT.COOL_PRESS]: 'coolPressesCount',
    };

    const counts = FishtankInteraction.findAll({
      where: {
        fishtankId,
        typeId: {
          [Op.in]: [
            FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
            FishtankInteractionType.PARTICIPANT.COOL_PRESS,
          ],
        },
      },
      group: ['typeId'],
      attributes: ['typeId', [sequelize.fn('COUNT', 'typeId'), 'count']],
    })
      .then(groups => (groups.reduce((acc, group) => {
        const { count, typeId } = group.dataValues;
        acc[countsKeys[typeId]] = count;
        return acc;
      }, {})));
    return counts;
  };

  return FishtankInteraction;
};
