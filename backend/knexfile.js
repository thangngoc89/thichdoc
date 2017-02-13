if (process.env.NODE_ENV === "production") {
  const pg = require("pg");
  pg.defaults.ssl = true;
}

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
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
