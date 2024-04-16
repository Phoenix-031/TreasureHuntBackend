"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAllLivesService = exports.isDisqualifiedService = exports.updateAnswerHashService = exports.checkTeamName = exports.updateLivesService = exports.getLivesService = exports.getAllTeams = exports.loginTeamService = exports.createTeamService = void 0;
const team_model_1 = require("../models/team.model");
const createTeamService = async (dto) => {
    return team_model_1.Team.create(dto);
};
exports.createTeamService = createTeamService;
const checkTeamName = async (teamString) => {
    return team_model_1.Team.findOne({ teamName: teamString });
};
exports.checkTeamName = checkTeamName;
const loginTeamService = async (dto) => {
    const qs = await team_model_1.Team.findOne({ teamId: dto.teamId });
    if (qs.espektroId === dto.espektroId) {
        return qs;
    }
    else
        return null;
};
exports.loginTeamService = loginTeamService;
const getAllTeams = async () => {
    const qs = await team_model_1.Team.find();
    return qs;
};
exports.getAllTeams = getAllTeams;
// const getQuestionByIdService = async (id : string) :  Promise<any> => {
// }
const getLivesService = async (teamId) => {
    const team = await team_model_1.Team.findOne({
        teamId: teamId
    });
    if (team) {
        return team.lives;
    }
    else {
        return null;
    }
};
exports.getLivesService = getLivesService;
const updateLivesService = async (teamId, lives) => {
    const team = await team_model_1.Team.findOneAndUpdate({
        teamId: teamId
    }, {
        lives: lives
    }, { new: true });
    return team;
};
exports.updateLivesService = updateLivesService;
const updateAnswerHashService = async (teamId, answerHash) => {
    const team = await team_model_1.Team.findOne({
        teamId: teamId
    });
    const updatedteam = await team_model_1.Team.findOneAndUpdate({
        teamId: teamId
    }, {
        answerString: team.answerString + '-' + answerHash
    });
    return updatedteam;
};
exports.updateAnswerHashService = updateAnswerHashService;
const isDisqualifiedService = async (teamId) => {
    await team_model_1.Team.findOne({
        teamId: teamId
    });
    const updatedteam = await team_model_1.Team.findOneAndUpdate({
        teamId: teamId
    }, {
        isDisqualified: true
    }, { new: true });
    return updatedteam;
};
exports.isDisqualifiedService = isDisqualifiedService;
const updateAllLivesService = async (lives) => {
    const team = await team_model_1.Team.updateMany({}, {
        lives: lives
    });
    return team;
};
exports.updateAllLivesService = updateAllLivesService;
//# sourceMappingURL=team.service.js.map