"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send("Api is running");
});
app.listen(port, function () { return console.log("Listening on port " + port); });
// user request to api                   -> test if api responses
// get params                            ->
// search image in filesystem
// check if thumbail for given size is already available -> test if file exists  -> test if file not exist
// if not resize and create thumbnail
// is yes - response image
exports.default = app;
