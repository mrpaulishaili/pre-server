"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../services/prisma"));
const cookieToken_1 = __importDefault(require("../utils/cookieToken"));
const userController = {
    // All Users
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma_1.default.user.findMany({
                where: { password: '' },
            });
            return res.json(users);
        });
    },
    // Create User
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const user = yield prisma_1.default.user.create({
                data: {
                    name,
                    email,
                    password,
                },
            });
            (0, cookieToken_1.default)(user, res);
        });
    },
    // Login User
    loginUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield prisma_1.default.user.findUnique({
                where: email,
            });
            return res.json({ user: user });
        });
    },
    // Update user
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const updatedUser = yield prisma_1.default.user.update({
                data: {},
                where: { id: paramId },
            });
            return res.json({ updatedUser: updatedUser });
        });
    },
    // Get a User
    findUniqueUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const uniqueUser = yield prisma_1.default.user.findUnique({
                where: { id: paramId },
            });
            return res.json({ uniqueUser: uniqueUser });
        });
    },
};
exports.default = userController;
//# sourceMappingURL=userController.js.map