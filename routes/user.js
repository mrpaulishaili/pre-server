"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
userController_1.default;
const userRoutes = (0, express_1.Router)();
userRoutes
    .post('/create', userController_1.default.createUser)
    .get('/', userController_1.default.index)
    .get('/:id', userController_1.default.findUniqueUser);
exports.default = userRoutes;
//# sourceMappingURL=user.js.map