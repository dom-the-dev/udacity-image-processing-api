"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send("Api is running");
});
router.get('/image', (function (req, res) {
    var filename = req.query.filename;
    if (!filename) {
        res.status(400).send('Filename missing');
    }
    else {
        var width = req.query.width;
        var height = req.query.height;
        // thumbnail?
        // if not get fullimage and resize
        // response thumbnail
        res.send('Image');
    }
}));
exports.default = router;
