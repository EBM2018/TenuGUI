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

  FishtankInteraction.getFormattedInteractions = async (fishtankId) => {
    const { FishtankInteractionType } = sequelize.models;
    const { Op } = sequelize;
    const countsKeys = {
      [FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS]: 'emergencyPresses',
      [FishtankInteractionType.PARTICIPANT.COOL_PRESS]: 'coolPresses',
      [FishtankInteractionType.PARTICIPANT.FASTER_RHYTHM_ASK]: 'fasterRhythmRequests',
      [FishtankInteractionType.PARTICIPANT.SLOWER_RHYTHM_ASK]: 'slowerRhythmRequests',
      [FishtankInteractionType.PARTICIPANT.LOW_UNDERSTANDING_NOTIFY]: 'lowUnderstandingNotifications',
      [FishtankInteractionType.PARTICIPANT.PAUSE_ASK]: 'pauseRequests',
      [FishtankInteractionType.PARTICIPANT.EXPLANATIONS_ASK]: 'explanationsRequests',
      [FishtankInteractionType.PARTICIPANT.DETAILS_ASK]: 'detailsRequests',
      [FishtankInteractionType.PARTICIPANT.EXAMPLES_ASK]: 'examplesRequests',
      [FishtankInteractionType.PARTICIPANT.TRIVIA_ASK]: 'triviaRequests',
      [FishtankInteractionType.PARTICIPANT.REFERENCE_ASK]: 'referenceRequests',
    };

    const counts = await FishtankInteraction.findAll({
      where: {
        fishtankId,
        typeId: {
          [Op.in]: [
            FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
            FishtankInteractionType.PARTICIPANT.COOL_PRESS,
            FishtankInteractionType.PARTICIPANT.FASTER_RHYTHM_ASK,
            FishtankInteractionType.PARTICIPANT.SLOWER_RHYTHM_ASK,
            FishtankInteractionType.PARTICIPANT.LOW_UNDERSTANDING_NOTIFY,
            FishtankInteractionType.PARTICIPANT.PAUSE_ASK,
            FishtankInteractionType.PARTICIPANT.EXPLANATIONS_ASK,
            FishtankInteractionType.PARTICIPANT.DETAILS_ASK,
            FishtankInteractionType.PARTICIPANT.EXAMPLES_ASK,
            FishtankInteractionType.PARTICIPANT.TRIVIA_ASK,
            FishtankInteractionType.PARTICIPANT.REFERENCE_ASK,
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
      }, {})))
      .then((groups) => {
        const completeGroups = {};
        const countsKeysKeys = Object.keys(countsKeys);
        for (let i = 0; i < countsKeysKeys.length; i += 1) {
          const countKey = countsKeys[countsKeysKeys[i]];
          completeGroups[countKey] = groups[countKey] == null ? 0 : groups[countKey];
        }
        return completeGroups;
      });
    const currentPeriod = await FishtankInteraction.findOne({
      where: {
        fishtankId,
        typeId: FishtankInteractionType.ADMIN.PERIOD_CHANGE,
      },
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    return {
      counts,
      currentPeriod: currentPeriod == null ? null : currentPeriod.payload,
    };
  };

  return FishtankInteraction;
};
