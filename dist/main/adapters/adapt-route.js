"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const { statusCode, body } = await controller.handle({ ...req.body });
        res.status(statusCode).json(body);
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=adapt-route.js.map