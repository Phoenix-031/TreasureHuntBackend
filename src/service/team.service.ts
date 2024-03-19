import { Types } from "mongoose";

import { Team } from "../models/team.model";
import { TeamDto, TeamSchemaDto } from "../dtos/team.dtos";

const createTeamService = async  (dto : TeamDto) : Promise<TeamSchemaDto> => {
    return Team.create(dto);
}

// const getQuestionByIdService = async (id : string) :  Promise<any> => {

// }

export {createTeamService}