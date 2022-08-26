"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const protocols_1 = require("../../protocols");
const api_response_1 = require("../../../main/utils/api-response");
const schemas_1 = require("../../../main/validators/schemas");
class AuthenticationController extends protocols_1.Controller {
    constructor(authenticationFeature, createTokenFeature) {
        super();
        this.authenticationFeature = authenticationFeature;
        this.createTokenFeature = createTokenFeature;
    }
    async perform({ email, password }) {
        await (0, schemas_1.authenticationSchema)({ email, password });
        const user = await this.authenticationFeature.execute({ email, password });
        const token = await this.createTokenFeature.execute(user);
        return (0, api_response_1.ok)(token);
    }
}
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication-controller.js.map