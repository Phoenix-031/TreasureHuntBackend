"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('verifyId');
