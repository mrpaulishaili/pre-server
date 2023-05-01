"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imageToB64(imageFileSrc) {
    const b64 = Buffer.from(imageFileSrc.buffer).toString('base64');
    let dataURI = 'data:' + imageFileSrc.mimetype + ';base64,' + b64;
    return dataURI;
}
exports.default = imageToB64;
//# sourceMappingURL=imageToB64.js.map