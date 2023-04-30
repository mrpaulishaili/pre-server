"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRoutes = (0, express_1.Router)();
productRoutes
    .get('/', productController_1.productController.index)
    .get('/:id', productController_1.productController.uniqueProduct)
    .post('/', productController_1.productController.addProduct)
    .put('/', productController_1.productController.updateProduct);
exports.default = productRoutes;
//# sourceMappingURL=products.js.map