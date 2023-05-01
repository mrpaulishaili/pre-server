"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token = process.env.JWT_SECRET || 'sss';
const getJwtToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId: userId }, token, {
        expiresIn: '1 day',
    });
};
exports.default = getJwtToken;
//# sourceMappingURL=getJwtToken.js.map