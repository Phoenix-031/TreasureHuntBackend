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
exports.getAllTeams = exports.loginTeam = exports.createTeam = void 0;
const response_creator_1 = require("../../utils/response.creator");
const teamService = __importStar(require("../service/team.service"));
const createTeam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = Object.assign({}, req.body);
        const qs = yield teamService.createTeamService(dto);
        return (0, response_creator_1.GenerateResponse)(res, 201, qs);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTeam = createTeam;
const loginTeam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId, espektroId } = req.body;
        const qs = yield teamService.loginTeamService({ teamId, espektroId });
        if (qs !== null)
            return (0, response_creator_1.GenerateResponse)(res, 200, qs);
        return (0, response_creator_1.GenerateResponse)(res, 401, {
            message: "Invalid credentials"
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginTeam = loginTeam;
const getAllTeams = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield teamService.getAllTeams();
    return (0, response_creator_1.GenerateResponse)(res, 200, teams);
});
exports.getAllTeams = getAllTeams;
