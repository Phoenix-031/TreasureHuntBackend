
import { QuerySnapshot } from "firebase-admin/firestore";
import { GenerateResponse } from "../../utils/response.creator";
import { QuestionSchemaDto, QuestionDto, QuestionUpdateDto } from "../dtos/question.dtos";
import { Question } from "../models/question.model";

const createQuestionService = async  (dto : QuestionDto) : Promise<QuestionSchemaDto> => {
    return Question.create(dto);
}

const getQuestionByIdService = async (id : string) :  Promise<any> => {
    const qs = await Question.findOne({questionId : id});

    return qs;
}

const getAllQuestionsService = async () : Promise<any> => {
    const qs = await Question.find();

    return qs;
}

const verifyAnswerService = async (questionId : string, answer : string) : Promise<any> => {
    const qs = await Question.findOne({questionId: questionId});

    if(qs?.answerCode === answer) {
        return true;
    } else {
        return false;
    }
    
}


export {createQuestionService, getQuestionByIdService, getAllQuestionsService, verifyAnswerService}