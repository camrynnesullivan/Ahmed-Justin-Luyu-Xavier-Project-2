require("dotenv");
module.exports = {
  development: {
    username: "root",
<<<<<<< HEAD
    password: process.env.DB_Pass,
=======
    password: DB_PASS,
>>>>>>> b358743409fcf474efff25f3b359d2836d3968a7
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
