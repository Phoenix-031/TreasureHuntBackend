"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const response_creator_1 = require("../../../utils/response.creator");
const team_route_1 = require("./team.route");
const questions_route_1 = require("./questions.route");
const mainRouter = (0, express_1.Router)();
exports.mainRouter = mainRouter;
// Add routes defined in other files below.
// mainRouter.use('/auth', authRouter)
mainRouter.use('/team', team_route_1.teamRouter);
mainRouter.use('/question', questions_route_1.questionRouter);
mainRouter.get('/', (req, res) => {
    (0, response_creator_1.GenerateResponse)(res, 200, {
        "message": "api up and running"
    });
});
mainRouter.use((req, res) => {
    (0, response_creator_1.GenerateResponse)(res, 404);
});
