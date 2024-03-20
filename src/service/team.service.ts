import { Types } from "mongoose";

import { Team } from "../models/team.model";
import { TeamDto, TeamSchemaDto } from "../dtos/team.dtos";

const createTeamService = async  (dto : TeamDto) : Promise<TeamSchemaDto> => {
    return Team.create(dto);
}

const loginTeamService = async (dto :any) => {
    const qs = await Team.findOne({teamId : dto.teamId});

    if(qs.espektroId=== dto.espektroId) {
        return qs;
    }else
       return null;

}

const getAllTeams= async() => {
    const qs = await Team.find();

    return qs;

}

// const getQuestionByIdService = async (id : string) :  Promise<any> => {

// }

export {createTeamService, loginTeamService, getAllTeams}