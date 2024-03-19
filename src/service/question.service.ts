import { Types } from "mongoose";

import { QuestionSchemaDto, QuestionDto, QuestionUpdateDto } from "../dtos/question.dtos";
import { Question } from "../models/question.model";

const createQuestionService = async  (dto : QuestionDto) : Promise<QuestionSchemaDto> => {
    return Question.create(dto);
}

const getQuestionByIdService = async (id : string) :  Promise<any> => {
    
}

export {createQuestionService, getQuestionByIdService}