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

  return FishtankInteraction;
};
