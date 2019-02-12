'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fishtank = sequelize.define('Fishtank', {
    id: DataTypes.INTEGER
  }, {});
  Fishtank.associate = function(models) {
    // associations can be defined here
  };
  return Fishtank;
};