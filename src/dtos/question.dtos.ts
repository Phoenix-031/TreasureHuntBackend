type QuestionDto = {
    questionId : string;
    spotName? : string;
    question : string,
    questionImage : string  | null;
    answerCode : string;
}

type QuestionUpdateDto = Partial<QuestionDto>
type QuestionSchemaDto = Document & QuestionDto;

export { QuestionDto, QuestionUpdateDto, QuestionSchemaDto };