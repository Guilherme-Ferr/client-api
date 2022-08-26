"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchError = void 0;
const api_response_1 = require("./api-response");
const error_logger_1 = __importDefault(require("./error-logger"));
const yup_error_formatter_1 = require("./yup-error-formatter");
const yup_1 = require("yup");
const constants_1 = require("../configs/constants");
function switchError(errorMessage) {
    if (errorMessage instanceof yup_1.ValidationError)
        return (0, api_response_1.badRequest)((0, yup_error_formatter_1.formatYupError)(errorMessage));
    (0, error_logger_1.default)(errorMessage);
    const obj = {
        NOT_FOUND: (text) => (0, api_response_1.notFound)(text),
        ALREADY_EXISTS: (text) => (0, api_response_1.conflict)(text),
        NOT_ALLOWED: (text) => (0, api_response_1.forbidden)(text),
        SERVER_ERROR: (text) => (0, api_response_1.serverError)(text),
    };
    try {
        const formatedMessage = errorMessage.message.split('_');
        const [state, action] = constants_1.RESPONSE_TYPE_ERROR[formatedMessage[0] + '_' + formatedMessage[1]].split('_');
        const concatReturnError = state + '_' + action || 'SERVER_ERROR';
        return obj[concatReturnError](formatedMessage[2].toLocaleLowerCase() || 'server error');
    }
    catch (e) {
        console.log('SERVER CHECK');
    }
}
exports.switchError = switchError;
//# sourceMappingURL=switch-error.js.map