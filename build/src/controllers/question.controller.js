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
exports.getAllQuestions = exports.getQuestionById = exports.createQuestion = void 0;
const response_creator_1 = require("../../utils/response.creator");
const questionService = __importStar(require("../service/question.service"));
const createQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = Object.assign({}, req.body);
        const qs = yield questionService.createQuestionService(dto);
        return (0, response_creator_1.GenerateResponse)(res, 201, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
});
exports.createQuestion = createQuestion;
const getQuestionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const qs = yield questionService.getQuestionByIdService(id);
        return (0, response_creator_1.GenerateResponse)(res, 200, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
});
exports.getQuestionById = getQuestionById;
const getAllQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const qs = yield questionService.getAllQuestionsService();
        return (0, response_creator_1.GenerateResponse)(res, 200, qs);
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, error);
    }
});
exports.getAllQuestions = getAllQuestions;
