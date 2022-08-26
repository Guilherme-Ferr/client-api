"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticationFeature = void 0;
const features_1 = require("../../../../data/features");
const repositories_1 = require("../../repositories");
const makeAuthenticationFeature = () => {
    const repository = (0, repositories_1.makeAuthenticationRepository)();
    return new features_1.AuthenticationFeature(repository);
};
exports.makeAuthenticationFeature = makeAuthenticationFeature;
//# sourceMappingURL=authentication-feature-factory.js.map