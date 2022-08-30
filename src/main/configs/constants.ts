import 'dotenv/config'

export const ERROR_REQUIRED_SCHEMA = (value: any) => `${value} não foi preenchido`

export const RESPONSE_TYPE_ERROR = {
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  NOT_FOUND: 'NOT_FOUND',
  NOT_ALLOWED: 'NOT_ALLOWED',
  SERVER_ERROR: 'SERVER_ERROR',
}

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
  TOKEN_SECRET_KEY,
} = process.env
