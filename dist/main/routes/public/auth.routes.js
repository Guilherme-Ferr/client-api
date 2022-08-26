"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const adapters_1 = require("../../adapters");
const controller_1 = require("../../factories/controller");
const router = (0, express_1.Router)();
exports.router = router;
exports.default = (auth) => {
    auth.post('/login', (0, adapters_1.adaptRoute)((0, controller_1.makeAuthenticationController)()));
};
//# sourceMappingURL=auth.routes.js.map