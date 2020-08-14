module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS,
    database: "vegan_db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "123456789",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "123456789",
    database: "database_production",
    host: "127.0.0.1",
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
