"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessController_1 = require("../controllers/businessController");
const businessRoutes = (0, express_1.Router)();
businessRoutes.get('/', businessController_1.businessController.index);
businessRoutes.post('/', (req, res) => {
    const { a, b } = req.body;
    if (a && b && typeof a === 'number' && typeof b === 'number') {
        res.json({
            success: true,
            message: a + b,
        });
    }
    else {
        res.json({
            success: false,
            message: 'Missing parameters',
        });
    }
});
exports.default = businessRoutes;
//# sourceMappingURL=business.js.map