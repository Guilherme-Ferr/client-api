import "dotenv/config";

export const {
  DB_DIALECT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  SENDER_EMAIL,
  REPORT_EMAIL,
  HOST_MAILER,
  PORT,
  SERVER_BASE_URL,
  TOKEN_SECRET_KEY,
} = process.env;
