"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticationRepository = void 0;
const repositories_1 = require("../../../../infra/repositories");
const makeAuthenticationRepository = () => {
    return new repositories_1.AuthenticationRepository();
};
exports.makeAuthenticationRepository = makeAuthenticationRepository;
//# sourceMappingURL=authentication-repository-factory.js.map