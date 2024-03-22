/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { createTeam, getAllTeams, loginTeam, getLives, updateLives, setAnswerHash, setDisqualified, updateAllLives } from "../controllers/team.controller";


const teamRouter = Router();


teamRouter.post('/', createTeam);
teamRouter.post('/login', loginTeam);
teamRouter.get('/', getAllTeams);
teamRouter.get('/lives',getLives);
teamRouter.patch('/lives',updateLives);
teamRouter.patch('/alllives',updateAllLives);
teamRouter.post ('/answerhash',setAnswerHash)
teamRouter.post('/disqualified',setDisqualified)

export { teamRouter };
