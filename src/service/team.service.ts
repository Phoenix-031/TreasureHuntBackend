import { Types } from "mongoose";

import { Team } from "../models/team.model";
import { TeamDto, TeamSchemaDto } from "../dtos/team.dtos";

const createTeamService = async  (dto : TeamDto) : Promise<TeamSchemaDto> => {
    return Team.create(dto);
}

const checkTeamName = async (teamString : string)=>{
    return Team.findOne({teamName : teamString});
}

const loginTeamService = async (dto :any) => {
    const qs = await Team.findOne({teamId : dto.teamId});

    if(qs.espektroId === dto.espektroId) {
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

const getLivesService = async(teamId : string) => {
    const team = await Team.findOne({
        teamId : teamId
    })

    if(team) {
        return team.lives;
    } else {
        return null;
    }
}

const updateLivesService = async(teamId : string, lives : number) => {
    const team
    = await Team.findOneAndUpdate({
        teamId : teamId
    },{
        lives : lives
    },{new : true})
    return team;
}

const updateAnswerHashService = async(teamId : string, answerHash : string) => {
    const team
    = await Team.findOne({
        teamId : teamId
    })

    const updatedteam = await Team.findOneAndUpdate({
        teamId : teamId
    },{
        answerString : team.answerString + '-'  + answerHash
    })
    
    return updatedteam;
}

const isDisqualifiedService= async(teamId : string) => {
    const team
    = await Team.findOne({
        teamId : teamId
    })

    const updatedteam = await Team.findOneAndUpdate({
        teamId : teamId
    },{
        isDisqualified : true
    },{new : true})

    return updatedteam;

}

const updateAllLivesService= async(lives : number) => {
    const team
    = await Team.updateMany({},{
        lives : lives
    })
    return team;
}


export {createTeamService, loginTeamService, getAllTeams, getLivesService, updateLivesService, checkTeamName, updateAnswerHashService, isDisqualifiedService, updateAllLivesService}