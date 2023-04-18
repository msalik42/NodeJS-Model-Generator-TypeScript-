"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const APP = (0, express_1.default)();
const PORT = 3000;
APP.get("/", (req, resp) => {
    resp.json({
        message: "This is home page"
    });
});
APP.listen(PORT, () => {
    console.log(`App is listening on 127.0.0.1:${PORT}`);
});
