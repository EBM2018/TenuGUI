module.exports = {
  app: {
    port: process.env.APP_PORT || 4000,
  },
  database: {
    development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_CONNECTION,
      port: process.env.DB_PORT,
      operatorsAliases: false,
    },
    testing: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_CONNECTION,
      port: process.env.DB_PORT,
      operatorsAliases: false,
    },
  },
};
