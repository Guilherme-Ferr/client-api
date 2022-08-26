"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupError = void 0;
function formatYupError(error) {
    return error.inner.map((item) => ({
        message: item.message,
        param: item.path,
    }));
}
exports.formatYupError = formatYupError;
//# sourceMappingURL=yup-error-formatter.js.map