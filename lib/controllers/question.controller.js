"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAnswer = exports.getAllQuestions = exports.getQuestionById = exports.createQuestion = void 0;
const response_creator_1 = require("../utils/response.creator");
const questionService = __importStar(require("../service/question.service"));
const createQuestion = async (req, res, next) => {
    try {
        const dto = Object.assign({}, req.body);
        const qs = await questionService.createQuestionService(dto);
        return (0, response_creator_1.GenerateResponse)(res, 201, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
};
exports.createQuestion = createQuestion;
const getQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id)
        const qs = await questionService.getQuestionByIdService(id);
        return (0, response_creator_1.GenerateResponse)(res, 200, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
};
exports.getQuestionById = getQuestionById;
const getAllQuestions = async (req, res, next) => {
    try {
        const qs = await questionService.getAllQuestionsService();
        return (0, response_creator_1.GenerateResponse)(res, 200, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
};
exports.getAllQuestions = getAllQuestions;
const verifyAnswer = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { questionId, answerCode } = req.body;
        const qs = await questionService.verifyAnswerService(questionId, answerCode);
        return (0, response_creator_1.GenerateResponse)(res, 200, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
};
exports.verifyAnswer = verifyAnswer;
//# sourceMappingURL=question.controller.js.map