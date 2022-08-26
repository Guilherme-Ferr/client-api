"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const switch_error_1 = require("../../main/utils/switch-error");
class Controller {
    async handle(httpRequest) {
        try {
            return await this.perform(httpRequest);
        }
        catch (error) {
            return (0, switch_error_1.switchError)(error);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map