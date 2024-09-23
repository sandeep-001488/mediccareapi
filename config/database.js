const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");

 const connections = {
   postgres: {
     connection: {
       connectionString: env("DATABASE_URL"), // Only use DATABASE_URL if it exists
       host: env(
         "DATABASE_HOST",
         " dpg-croijj08fa8c738sbrk0-a.oregon-postgres.render.com"
       ),
       port: env.int("DATABASE_PORT", 5432),
       database: env("DATABASE_NAME", "strapi_db_9phl"),
       user: env("DATABASE_USERNAME", "sandeep"),
       password: env("DATABASE_PASSWORD", "PIjufbA4LzCdCwtVTitW2FohmspoZayL"),
       ssl: {
         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
       },
     },
     pool: {
       min: env.int("DATABASE_POOL_MIN", 2),
       max: env.int("DATABASE_POOL_MAX", 10),
     },
   },
 };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
