require("dotenv");
module.exports = {
  development: {
    username: "root",
<<<<<<< HEAD
    password: "Mysqlalex@1z.",
=======
    password: "xej62920",
>>>>>>> master
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
