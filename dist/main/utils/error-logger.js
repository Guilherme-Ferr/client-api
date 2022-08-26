"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const _1 = require(".");
function errorLogger(error) {
    const date = (0, _1.getFullDate)();
    const pathError = path_1.default.resolve(__dirname, '..', '..', '..', 'log', 'error');
    !(0, fs_1.existsSync)(pathError) && (0, fs_1.mkdirSync)(pathError, { recursive: true });
    const fileError = path_1.default.resolve(pathError, 'error.log');
    const stringError = `---- Date: ${date} Error: ${error.name}: ${error.message} at ${error.stack}
`;
    (0, fs_1.appendFile)(fileError, stringError, (errorLog) => {
        if (errorLog)
            throw errorLog;
    });
}
exports.default = errorLogger;
//# sourceMappingURL=error-logger.js.map