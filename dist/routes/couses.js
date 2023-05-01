"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
const courseRoutes = (0, express_1.Router)();
courseRoutes.get('/', courseController_1.courseController.index);
exports.default = courseRoutes;
//# sourceMappingURL=couses.js.map