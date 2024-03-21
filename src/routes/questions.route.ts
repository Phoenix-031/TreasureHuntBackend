/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { createQuestion, getAllQuestions, getQuestionById, verifyAnswer } from "../controllers/question.controller";

const questionRouter = Router();


questionRouter.post("/verify", verifyAnswer);
questionRouter.get("/:id",getQuestionById);
questionRouter.post('/', createQuestion);
questionRouter.get('/',getAllQuestions)


export { questionRouter };
