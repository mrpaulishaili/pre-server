"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cloudinary_1 = require("cloudinary");
// Routes
const business_1 = __importDefault(require("./routes/business"));
const ads_1 = __importDefault(require("./routes/ads"));
const products_1 = __importDefault(require("./routes/products"));
const couses_1 = __importDefault(require("./routes/couses"));
const resources_1 = __importDefault(require("./routes/resources"));
const user_1 = __importDefault(require("./routes/user"));
const normalizePort_1 = __importDefault(require("./utils/normalizePort"));
const upload_1 = __importDefault(require("./routes/upload"));
const app = (0, express_1.default)();
const PORT = (0, normalizePort_1.default)(process.env.PORT || 4000);
app.set('port', PORT);
const server = http_1.default.createServer(app);
const cloudinary = cloudinary_1.v2;
// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use('/business', business_1.default);
app.use('/ads', ads_1.default);
app.use('/products', products_1.default);
app.use('/courses', couses_1.default);
app.use('/resources', resources_1.default);
app.use('/users', user_1.default);
app.use('/upload', upload_1.default);
app.get('/', (req, res) => {
    res.send('Edupora Server API');
});
// image upload API
app.post('/upload-image', (req, res) => {
    // collected image from a user
    const data = {
        image: req.body.image,
    };
    // upload image here
    cloudinary.uploader
        .upload(data.image, { folder: 'products' })
        // return response
        .then((result) => {
        res.status(200).send({
            message: 'success',
            result,
        });
    })
        // return error
        .catch((error) => {
        res.status(500).send({
            message: 'failure',
            error,
        });
    });
});
const errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + PORT;
    console.log('App Listening on ' + bind);
});
server.listen(PORT);
//# sourceMappingURL=server.js.map