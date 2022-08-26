"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticationController = void 0;
const controllers_1 = require("../../../../application/controllers");
const features_1 = require("../../features");
const makeAuthenticationController = () => {
    const authenticationService = (0, features_1.makeAuthenticationFeature)();
    const createTokenService = (0, features_1.makeCreateTokenFeature)();
    return new controllers_1.AuthenticationController(authenticationService, createTokenService);
};
exports.makeAuthenticationController = makeAuthenticationController;
//# sourceMappingURL=authentication-controller-factory.js.map