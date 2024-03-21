/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { createTeam, getAllTeams, loginTeam } from "../controllers/team.controller";


const teamRouter = Router();


teamRouter.post('/', createTeam);
teamRouter.post('/login', loginTeam);
teamRouter.get('/', getAllTeams)


export { teamRouter };
