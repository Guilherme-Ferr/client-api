import Knex from 'knex'
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } from '../constants'

const knex = Knex({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
})

export default knex
