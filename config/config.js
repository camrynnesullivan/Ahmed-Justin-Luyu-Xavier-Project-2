require("dotenv").config();
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
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    // eslint-disable-next-line
    use_Env_Variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
