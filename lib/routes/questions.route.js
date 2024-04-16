"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const question_controller_1 = require("../controllers/question.controller");
const questionRouter = (0, express_1.Router)();
exports.questionRouter = questionRouter;
questionRouter.post("/verify", question_controller_1.verifyAnswer);
questionRouter.get("/:id", question_controller_1.getQuestionById);
questionRouter.post('/', question_controller_1.createQuestion);
questionRouter.get('/', question_controller_1.getAllQuestions);
//# sourceMappingURL=questions.route.js.map