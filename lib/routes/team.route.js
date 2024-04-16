"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRouter = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const team_controller_1 = require("../controllers/team.controller");
const teamRouter = (0, express_1.Router)();
exports.teamRouter = teamRouter;
teamRouter.post('/', team_controller_1.createTeam);
teamRouter.post('/login', team_controller_1.loginTeam);
teamRouter.get('/', team_controller_1.getAllTeams);
teamRouter.get('/lives', team_controller_1.getLives);
teamRouter.patch('/lives', team_controller_1.updateLives);
teamRouter.patch('/alllives', team_controller_1.updateAllLives);
teamRouter.post('/answerhash', team_controller_1.setAnswerHash);
teamRouter.post('/disqualified', team_controller_1.setDisqualified);
//# sourceMappingURL=team.route.js.map