"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resourceController_1 = require("../controllers/resourceController");
const resourceRoutes = (0, express_1.Router)();
resourceRoutes.get('/', resourceController_1.resourceController.index);
exports.default = resourceRoutes;
//# sourceMappingURL=resources.js.map