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
exports.updateAllLives = exports.setDisqualified = exports.setAnswerHash = exports.updateLives = exports.getLives = exports.getAllTeams = exports.loginTeam = exports.createTeam = void 0;
const response_creator_1 = require("../utils/response.creator");
const teamService = __importStar(require("../service/team.service"));
const createTeam = async (req, res, next) => {
    try {
        const dto = Object.assign({}, req.body);
        const tm = await teamService.checkTeamName(dto.teamName);
        console.log(tm, "dfvbjhb");
        if (tm) {
            return (0, response_creator_1.GenerateResponse)(res, 200, {
                message: "Team name already exists"
            });
        }
        else {
            const qs = await teamService.createTeamService(dto);
            return (0, response_creator_1.GenerateResponse)(res, 201, qs);
        }
    }
    catch (error) {
        return (0, response_creator_1.GenerateResponse)(res, 500, {
            message: "Internal server error"
        });
    }
};
exports.createTeam = createTeam;
const loginTeam = async (req, res, next) => {
    try {
        const { teamId, espektroId } = req.body;
        const qs = await teamService.loginTeamService({ teamId, espektroId });
        console.log(qs);
        if (qs !== null)
            return (0, response_creator_1.GenerateResponse)(res, 200, qs);
        else
            return (0, response_creator_1.GenerateResponse)(res, 200, {
                message: "Invalid credentials"
            });
    }
    catch (error) {
        console.log(error);
    }
};
exports.loginTeam = loginTeam;
const getAllTeams = async (req, res, next) => {
    const teams = await teamService.getAllTeams();
    return (0, response_creator_1.GenerateResponse)(res, 200, teams);
};
exports.getAllTeams = getAllTeams;
const getLives = async (req, res, next) => {
    // console.log(req.params)
    const lives = await teamService.getLivesService(req.query.teamId);
    return (0, response_creator_1.GenerateResponse)(res, 200, lives);
};
exports.getLives = getLives;
const updateLives = async (req, res, next) => {
    const { teamId, lives } = req.body;
    const updatedTeam = await teamService.updateLivesService(teamId, lives);
    return (0, response_creator_1.GenerateResponse)(res, 200, updatedTeam);
};
exports.updateLives = updateLives;
const setAnswerHash = async (req, res, next) => {
    const { teamId, answerHash } = req.body;
    const hasupdated = await teamService.updateAnswerHashService(teamId, answerHash);
    console.log(hasupdated);
    return (0, response_creator_1.GenerateResponse)(res, 200, hasupdated);
};
exports.setAnswerHash = setAnswerHash;
const setDisqualified = async (req, res, next) => {
    const { teamId } = req.body;
    const hasupdated = await teamService.isDisqualifiedService(teamId);
    console.log(hasupdated);
    return (0, response_creator_1.GenerateResponse)(res, 200, hasupdated);
};
exports.setDisqualified = setDisqualified;
const updateAllLives = async (req, res, next) => {
    const { lives } = req.body;
    const updatedTeam = await teamService.updateAllLivesService(lives);
    return (0, response_creator_1.GenerateResponse)(res, 200, updatedTeam);
};
exports.updateAllLives = updateAllLives;
//# sourceMappingURL=team.controller.js.map