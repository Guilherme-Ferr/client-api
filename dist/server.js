"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const constants_1 = require("./main/configs/constants");
require("./main/configs/module-alias");
app_1.app.listen(constants_1.PORT, () => console.log('Server is running on port:', constants_1.PORT));
//# sourceMappingURL=server.js.map