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
exports.productController = void 0;
const prisma_1 = __importDefault(require("../services/prisma"));
exports.productController = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield prisma_1.default.product.findMany();
            return res.json(products);
        });
    },
    uniqueProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const product = yield prisma_1.default.product.findUnique({ where: { id: paramId } });
            return res.json({ product: product });
        });
    },
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, imgUrl, price } = req.body;
            const product = yield prisma_1.default.product.create({
                data: {
                    name,
                    description,
                    imgUrl,
                    price,
                },
            });
            return res.json({ product: product });
        });
    },
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, imgUrl, price } = req.body;
            const product = yield prisma_1.default.product.create({
                data: {
                    name,
                    description,
                    imgUrl,
                    price,
                },
            });
            return res.json({ product: product });
        });
    },
};
//# sourceMappingURL=productController.js.map