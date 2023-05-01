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
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const uploadContoller_1 = require("../controllers/uploadContoller");
const imageToB64_1 = __importDefault(require("../utils/imageToB64"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
});
const uploadRoutes = (0, express_1.Router)();
uploadRoutes.post('/', upload.single('my_file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cldRes = yield (0, uploadContoller_1.handleUpload)((0, imageToB64_1.default)(req.file));
        res.json(cldRes);
    }
    catch (error) {
        console.log(error);
        res.send({
            message: error.message,
        });
    }
}));
exports.default = uploadRoutes;
//# sourceMappingURL=upload.js.map