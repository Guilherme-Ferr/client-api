import 'dotenv/config'

export const ERROR_REQUIRED_SCHEMA = (value: any) => `${value} não foi preenchido`

export const {
  DB_DIALECT,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  SENDER_EMAIL,
  REPORT_EMAIL,
  HOST_MAILER,
  PORT,
  SERVER_BASE_URL,
  TOKEN_SECRET,
} = process.env
