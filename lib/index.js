"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.treasureHuntApi = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { connect } from './config/db.config';
// import { getConnectionState } from './config/db.config';
const main_route_1 = require("./routes/main.route");
//firebase imports
const https_1 = require("firebase-functions/v2/https");
dotenv_1.default.config({ path: './.env' });
const app = (0, express_1.default)();
// Add some external middlewares. These middlewares will always function for every request our express app receives.
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// const MONGO_URI = process.env.CONNECTION_URI;
// const PORT = Number(process.env.PORT);
app.use("/api/v1", main_route_1.mainRouter);
app.get("/", (req, res) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeString = `${hours}:${minutes}:${seconds}`;
    res.json({
        message: "Server is up and running",
        time: timeString,
    });
});
app.use("*", (req, res) => {
    res.status(404).json({
        code: 404,
        type: "error",
        message: "Not Found"
    });
});
exports.treasureHuntApi = (0, https_1.onRequest)(app);
//# sourceMappingURL=index.js.map