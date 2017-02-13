require("babel-register");

module.exports = {
  test: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },
  development: {
    client: "postgresql",
    connection: {
      database: "thichdoc",
      user: "thichdoc",
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
