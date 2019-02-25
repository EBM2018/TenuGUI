const { sequelize } = require('../database/models');

module.exports = {
  storage: 'sequelize',
  storageOptions: {
    sequelize,
  },
  logging: false,
  upName: 'up',
  downName: 'down',
  migrations: {
    params: [sequelize.getQueryInterface(), sequelize.constructor],
    path: 'src/database/migrations',
    pattern: /\.js$/,
  },
};
