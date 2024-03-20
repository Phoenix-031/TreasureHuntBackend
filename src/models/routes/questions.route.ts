/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { body, query } from "express-validator";
import { createQuestion, getAllQuestions, getQuestionById } from "../../controllers/question.controller";

const questionRouter = Router();


questionRouter.get("/:id",getQuestionById);
questionRouter.post('/', createQuestion);
questionRouter.get('/',getAllQuestions)


export { questionRouter };
