import { model, Model, Schema } from "mongoose";
import { QuestionSchemaDto } from "../dtos/question.dtos";

const questionSchema: Schema<QuestionSchemaDto> = new Schema(
    {
        questionId : {
            type : String,
            required : true,
            unique : true
        },
        spotName : {
            type : String,
            required : true
        },
        question : {
            type : String,
            required : true
        },
        questionImage : {
            type : String,
            default : ''
        },
        answerCode : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    }
);

const Question: Model<QuestionSchemaDto> = model(
    "Question",
    questionSchema
);

export { Question };