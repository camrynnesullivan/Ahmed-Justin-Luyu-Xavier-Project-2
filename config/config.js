require("dotenv");
module.exports = {
  development: {
    username: "root",
    password: "toutoumy1961",
    password: "Mysqlalex@1z.",
    database: "vegan_db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
