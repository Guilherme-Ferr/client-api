"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReturn = exports.forbidden = exports.conflict = exports.expired = exports.unauthorized = exports.notFound = exports.serverTimeout = exports.serverError = exports.badRequest = exports.create = exports.ok = void 0;
function ok(payload = {}) {
    return {
        statusCode: 200,
        body: {
            message: 'ok',
            payload,
        },
    };
}
exports.ok = ok;
function create(payload = {}) {
    return {
        statusCode: 201,
        body: {
            message: 'created successfully',
            payload,
        },
    };
}
exports.create = create;
function badRequest(payload = {}) {
    return {
        statusCode: 400,
        body: {
            message: 'bad request',
            payload,
        },
    };
}
exports.badRequest = badRequest;
function serverError() {
    return {
        statusCode: 500,
        body: {
            message: 'internal server error',
            errors: [
                {
                    message: 'Ocorreu um erro, tente novamente mais tarde!',
                },
            ],
        },
    };
}
exports.serverError = serverError;
function serverTimeout() {
    return {
        statusCode: 504,
        body: {
            message: 'server response error',
            errors: [
                {
                    message: 'Ocorreu um erro de resposta, tente novamente!',
                },
            ],
        },
    };
}
exports.serverTimeout = serverTimeout;
function notFound(field) {
    return {
        statusCode: 404,
        body: {
            message: 'not found',
            errors: [
                {
                    message: `${field} não encontrado`,
                },
            ],
        },
    };
}
exports.notFound = notFound;
function unauthorized(field) {
    return {
        statusCode: 401,
        body: {
            message: 'unauthorized',
            errors: [
                {
                    message: `${field} não autorizado`,
                },
            ],
        },
    };
}
exports.unauthorized = unauthorized;
function expired() {
    return {
        statusCode: 401,
        body: {
            message: 'jwt expired',
            errors: [
                {
                    message: 'token expirado',
                },
            ],
        },
    };
}
exports.expired = expired;
function conflict(field) {
    return {
        statusCode: 409,
        body: {
            message: 'already exists',
            errors: [
                {
                    message: `${field} já existe`,
                },
            ],
        },
    };
}
exports.conflict = conflict;
function forbidden(field) {
    return {
        statusCode: 403,
        body: {
            message: 'denied',
            errors: [
                {
                    message: `${field} não permitido`,
                },
            ],
        },
    };
}
exports.forbidden = forbidden;
function makeReturn(res, httpResponse) {
    return res.status(httpResponse.statusCode).json(httpResponse.body);
}
exports.makeReturn = makeReturn;
//# sourceMappingURL=api-response.js.map