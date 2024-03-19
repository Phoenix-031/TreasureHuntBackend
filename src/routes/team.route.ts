/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { body, query } from "express-validator";
import { createTeam } from "../controllers/team.controller";


const teamRouter = Router();


teamRouter.post('/', createTeam);


export { teamRouter };
