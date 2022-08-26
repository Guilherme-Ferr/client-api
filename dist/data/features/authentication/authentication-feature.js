"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationFeature = void 0;
const authentication_1 = require("../../../main/utils/authentication");
class AuthenticationFeature {
    constructor(authenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }
    async execute(input) {
        const validUserEmail = await this.authenticationRepository.authenticate(input.email);
        if (!validUserEmail || validUserEmail == null)
            throw new Error('NOT_FOUND_usuario');
        const validUserPassword = await (0, authentication_1.validatePassword)(input.password, validUserEmail.password);
        if (!validUserPassword)
            throw new Error('NOT_FOUND_usuario');
        return validUserEmail;
    }
}
exports.AuthenticationFeature = AuthenticationFeature;
//# sourceMappingURL=authentication-feature.js.map