import { Request, Response, NextFunction } from "express";

import { GenerateResponse } from "../utils/response.creator";
import { QuestionDto, QuestionSchemaDto } from "../dtos/question.dtos";

import * as questionService from "../service/question.service";

const createQuestion = async(
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {

        try {

            const dto : QuestionDto  = {...req.body}


            const qs:QuestionSchemaDto  = await questionService.createQuestionService(dto);

            return GenerateResponse(res,201,qs)
            
        } catch (error) {
            return GenerateResponse(res,500,error)
        }
}

const getQuestionById = async(
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {
        try {

            const {id} = req.params
            // console.log(id)
            const qs = await questionService.getQuestionByIdService(id);


            return GenerateResponse(res,200,qs)
        } catch (error) {
            return GenerateResponse(res,500,error)
        }
    }

const getAllQuestions = async (
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {
        try {
            const qs = await questionService.getAllQuestionsService();

            return GenerateResponse(res,200,qs);
            
        } catch (error) {
            return GenerateResponse(res,500,error)
        }
    }

const verifyAnswer = async (
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {
        // console.log(req.body)
        
        try {
            const {questionId, answerCode} = req.body;
            const qs = await questionService.verifyAnswerService(questionId, answerCode);
            return GenerateResponse(res,200,qs);
            
        } catch (error) {
            return GenerateResponse(res,500,error)
        }
    }
    
export { createQuestion, getQuestionById, getAllQuestions, verifyAnswer };