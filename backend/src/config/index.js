module.exports = {
  app: {
    port: process.env.APP_PORT || 4000,
  },
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  },
};
