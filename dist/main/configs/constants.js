"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_SECRET = exports.SERVER_BASE_URL = exports.PORT = exports.HOST_MAILER = exports.REPORT_EMAIL = exports.SENDER_EMAIL = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.DB_DIALECT = exports.RESPONSE_TYPE_ERROR = exports.ERROR_REQUIRED_SCHEMA = void 0;
require("dotenv/config");
const ERROR_REQUIRED_SCHEMA = (value) => `${value} não foi preenchido`;
exports.ERROR_REQUIRED_SCHEMA = ERROR_REQUIRED_SCHEMA;
exports.RESPONSE_TYPE_ERROR = {
    ALREADY_EXISTS: 'ALREADY_EXISTS',
    NOT_FOUND: 'NOT_FOUND',
    NOT_ALLOWED: 'NOT_ALLOWED',
    SERVER_ERROR: 'SERVER_ERROR',
};
_a = process.env, exports.DB_DIALECT = _a.DB_DIALECT, exports.DB_HOST = _a.DB_HOST, exports.DB_USERNAME = _a.DB_USERNAME, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.DB_NAME = _a.DB_NAME, exports.SENDER_EMAIL = _a.SENDER_EMAIL, exports.REPORT_EMAIL = _a.REPORT_EMAIL, exports.HOST_MAILER = _a.HOST_MAILER, exports.PORT = _a.PORT, exports.SERVER_BASE_URL = _a.SERVER_BASE_URL, exports.TOKEN_SECRET = _a.TOKEN_SECRET;
//# sourceMappingURL=constants.js.map