import { Request, Response, NextFunction } from "express";

import { GenerateResponse } from "../../utils/response.creator";
import { QuestionDto, QuestionSchemaDto } from "../dtos/question.dtos";

import * as questionService from "../service/question.service";

const createQuestion = async(
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {

        try {

            const dto : QuestionDto  = {...req.body}

            // const qsexist = await questionService.

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
            const qs = await questionService.getQuestionByIdService(req.params.id);

            console.log(qs);

            return GenerateResponse(res,200,qs);
            
        } catch (error) {
            return GenerateResponse(res,500,error)
        }
    }

export { createQuestion };