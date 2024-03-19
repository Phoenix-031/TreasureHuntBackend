
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

export {createQuestionService, getQuestionByIdService, getAllQuestionsService}