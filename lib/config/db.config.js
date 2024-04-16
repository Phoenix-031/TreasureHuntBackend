"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidConnectionURI = exports.getConnectionState = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * connect function connects the application to mongo db and returns the connection instance
 *
 * @param {string} connectionURI the uri connection string
 * @returns  {Promise<typeof mongoose>} db connection instance
 */
const connect = async (connectionURI) => {
    mongoose_1.default.set("strictQuery", false);
    return mongoose_1.default.connect(connectionURI);
};
exports.connect = connect;
/**
 * getConnectionState function accepts a mongo instance state field and returns the equivalent state as string
 *
 * @param {number} readyState numbered-state of the db connection
 * @returns  {string} human readable stringified state of the db connection
 */
const getConnectionState = (readyState) => {
    switch (readyState) {
        case 0:
            return "Disconnected";
        case 1:
            return "Connected";
        case 2:
            return "Connecting";
        case 3:
            return "Disconnecting";
        default:
            return "Uninitialized";
    }
};
exports.getConnectionState = getConnectionState;
/**
 * isValidConnectionURI checks whether the passed uri string is of the valid mongodb uri format
 *
 * @param {string} connectionURI
 * @returns  {boolean}
 */
const isValidConnectionURI = (connectionURI) => {
    // check for invalid uri string
    if (connectionURI.substring(0, 14) !== "mongodb+srv://" &&
        connectionURI.substring(0, 10) !== "mongodb://")
        return false;
    return true;
};
exports.isValidConnectionURI = isValidConnectionURI;
//# sourceMappingURL=db.config.js.map