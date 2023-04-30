"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const postRoutes = (0, express_1.Router)();
postRoutes.get('/', postController_1.postController.index);
postRoutes.post('/', (req, res) => {
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
exports.default = postRoutes;
//# sourceMappingURL=posts.js.map