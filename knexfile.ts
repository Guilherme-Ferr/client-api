import type { Knex } from 'knex'
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } from './src/main/configs/constants'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  // development: {
  //   user: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3',
  //   },
  //   migrations: {
  //     directory: './src/infra/migrations',
  //   },
  // },
  // staging: {
  //   user: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
  // production: {
  //   user: 'postgresql',
  //   connection: {
  //     database: DB_NAME,
  //     user: DB_USERNAME,
  //     password: DB_PASSWORD,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
}

module.exports = config
