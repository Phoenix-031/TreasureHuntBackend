/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { body, query } from "express-validator";
import { createQuestion } from "../controllers/question.controller";

const questionRouter = Router();


questionRouter.post('/', createQuestion);


export { questionRouter };
