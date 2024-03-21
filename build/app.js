"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_route_1 = require("./src/models/routes/main.route");
const db_config_1 = require("./src/config/db.config");
const db_config_2 = require("./src/config/db.config");
dotenv_1.default.config({ path: './.env' });
const app = (0, express_1.default)();
// Add some external middlewares. These middlewares will always function for every request our express app receives.
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PROJECT_NAME = String(process.env.PROJECT_NAME);
const MONGO_URI = process.env.CONNECTION_URI;
const BASE_URL = process.env.BASE_URL;
const PORT = Number(process.env.PORT);
app.use("/api/v1", main_route_1.mainRouter);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, db_config_1.connect)(MONGO_URI || '' // provide a default value if MONGO_URI is undefined
    );
    console.log(`${(0, db_config_2.getConnectionState)(db.connection.readyState)} to the database`);
    // tslint:disable-next-line:no-console
    console.log(`Listening on ${BASE_URL}:${PORT}...`);
    app.emit("ready");
}));
