"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllQuestionsService = exports.getQuestionByIdService = exports.createQuestionService = void 0;
const question_model_1 = require("../models/question.model");
const createQuestionService = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    return question_model_1.Question.create(dto);
});
exports.createQuestionService = createQuestionService;
const getQuestionByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const qs = yield question_model_1.Question.findOne({ questionId: id });
    return qs;
});
exports.getQuestionByIdService = getQuestionByIdService;
const getAllQuestionsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const qs = yield question_model_1.Question.find();
    return qs;
});
exports.getAllQuestionsService = getAllQuestionsService;
