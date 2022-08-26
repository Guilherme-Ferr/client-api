"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullDate = void 0;
function getFullDate() {
    const date = new Date()
        .toString()
        .replace(/[A-Z]{3}\+/, '+')
        .split(/ /);
    return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`;
}
exports.getFullDate = getFullDate;
//# sourceMappingURL=index.js.map