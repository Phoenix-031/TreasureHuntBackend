"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAnswerService = exports.getAllQuestionsService = exports.getQuestionByIdService = exports.createQuestionService = void 0;
const question_model_1 = require("../models/question.model");
const createQuestionService = async (dto) => {
    return question_model_1.Question.create(dto);
};
exports.createQuestionService = createQuestionService;
const getQuestionByIdService = async (id) => {
    const qs = await question_model_1.Question.findOne({ questionId: id });
    return qs;
};
exports.getQuestionByIdService = getQuestionByIdService;
const getAllQuestionsService = async () => {
    const qs = await question_model_1.Question.find();
    return qs;
};
exports.getAllQuestionsService = getAllQuestionsService;
const verifyAnswerService = async (questionId, answerCode) => {
    const qs = await question_model_1.Question.findOne({ questionId: questionId });
    if ((qs === null || qs === void 0 ? void 0 : qs.answerCode) === answerCode) {
        return true;
    }
    else {
        return false;
    }
};
exports.verifyAnswerService = verifyAnswerService;
//# sourceMappingURL=question.service.js.map