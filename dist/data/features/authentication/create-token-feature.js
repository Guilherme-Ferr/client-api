"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokenFeature = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const constants_1 = require("../../../main/configs/constants");
class CreateTokenFeature {
    async execute(input) {
        const token = (0, jsonwebtoken_1.sign)({ input }, constants_1.TOKEN_SECRET, {
            subject: String(input.id_client_user),
            expiresIn: '30h',
        });
        return { token };
    }
}
exports.CreateTokenFeature = CreateTokenFeature;
//# sourceMappingURL=create-token-feature.js.map