"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESPONSE_TYPE_ERROR = exports.ERROR_REQUIRED_SCHEMA = void 0;
const ERROR_REQUIRED_SCHEMA = (value) => `${value} não foi preenchido`;
exports.ERROR_REQUIRED_SCHEMA = ERROR_REQUIRED_SCHEMA;
exports.RESPONSE_TYPE_ERROR = {
    ALREADY_EXISTS: 'ALREADY_EXISTS',
    NOT_FOUND: 'NOT_FOUND',
    NOT_ALLOWED: 'NOT_ALLOWED',
    SERVER_ERROR: 'SERVER_ERROR',
};
//# sourceMappingURL=yup-config.js.map