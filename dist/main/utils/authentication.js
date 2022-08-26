"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const sha256_1 = __importDefault(require("sha256"));
async function validatePassword(requestPassword, hashedDBPassword) {
    const bcryptedPassword = await (0, bcryptjs_1.compare)(requestPassword, hashedDBPassword);
    if (!bcryptedPassword) {
        const hashRequest = (0, sha256_1.default)(requestPassword);
        if (hashRequest == hashedDBPassword)
            return true;
        return false;
    }
    else
        return true;
}
exports.validatePassword = validatePassword;
//# sourceMappingURL=authentication.js.map