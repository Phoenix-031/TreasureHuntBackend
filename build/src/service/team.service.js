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
exports.getAllTeams = exports.loginTeamService = exports.createTeamService = void 0;
const team_model_1 = require("../models/team.model");
const createTeamService = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    return team_model_1.Team.create(dto);
});
exports.createTeamService = createTeamService;
const loginTeamService = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    const qs = yield team_model_1.Team.findOne({ teamId: dto.teamId });
    if (qs.espektroId === dto.espektroId) {
        return qs;
    }
    else
        return null;
});
exports.loginTeamService = loginTeamService;
const getAllTeams = () => __awaiter(void 0, void 0, void 0, function* () {
    const qs = yield team_model_1.Team.find();
    return qs;
});
exports.getAllTeams = getAllTeams;
