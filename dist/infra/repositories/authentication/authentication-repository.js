"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRepository = void 0;
const knex_1 = __importDefault(require("../../../main/configs/database/knex"));
class AuthenticationRepository {
    async authenticate(email) {
        return await (0, knex_1.default)('tb_client_user')
            .select('id_client_user', 'name', 'password')
            .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
            .where('tb_email.email', email)
            .first();
    }
}
exports.AuthenticationRepository = AuthenticationRepository;
//# sourceMappingURL=authentication-repository.js.map