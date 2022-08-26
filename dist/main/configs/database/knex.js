"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const constants_1 = require("../constants");
const knex = (0, knex_1.default)({
    client: 'mysql',
    connection: {
        host: constants_1.DB_HOST,
        user: constants_1.DB_USERNAME,
        password: constants_1.DB_PASSWORD,
        database: constants_1.DB_NAME,
    },
});
exports.default = knex;
//# sourceMappingURL=knex.js.map