"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    questionId: {
        type: String,
        required: true,
        unique: true
    },
    spotName: {
        type: String,
        required: true
    },
    question: {
        type: String,
        default: ""
    },
    questionImage: {
        type: String,
        default: ''
    },
    answerCode: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
const Question = (0, mongoose_1.model)("Question", questionSchema);
exports.Question = Question;
//# sourceMappingURL=question.model.js.map