"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adsController_1 = require("../controllers/adsController");
const adsRoutes = (0, express_1.Router)();
adsRoutes.get('/', adsController_1.adsController.index);
adsRoutes.post('/', (req, res) => {
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
exports.default = adsRoutes;
//# sourceMappingURL=ads.js.map