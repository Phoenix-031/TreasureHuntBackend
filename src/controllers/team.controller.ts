import { Request, Response, NextFunction } from "express";

import { GenerateResponse } from "../utils/response.creator";

import * as teamService from "../service/team.service";
import { TeamDto, TeamSchemaDto } from "../dtos/team.dtos";

const createTeam = async(
    req: Request,
    res: Response,
    next: NextFunction) : Promise<Response | void> => {

        try {

            const dto : TeamDto  = {...req.body}

            const tm = await teamService.checkTeamName(dto.teamName);
            console.log(tm,"dfvbjhb")

            if(tm) {
                return GenerateResponse(res,200,{
                    message: "Team name already exists"
                })
            }else {

                const qs:TeamSchemaDto  = await teamService.createTeamService(dto);

                return GenerateResponse(res,201,qs)
            }
            
        } catch (error) {
            return GenerateResponse(res,500,{
                message: "Internal server error"
            })
        }
}

const loginTeam = async(
    req : Request,
    res : Response,
    next: NextFunction
) : Promise<Response | void> => {
    try {
        const {teamId, espektroId} = req.body;

        const qs:TeamSchemaDto  = await teamService.loginTeamService({teamId, espektroId});
        console.log(qs)
        if(qs!== null)
            return GenerateResponse(res,200,qs)
        else
            return GenerateResponse(res,200,{
                message: "Invalid credentials"
            })

    } catch (error) {
        console.log(error);
    }
}

const getAllTeams = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const teams = await teamService.getAllTeams();
    return GenerateResponse(res,200,teams);
}

const getLives = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {teamId} = req.params;
    console.log(teamId)
    const lives = await teamService.getLivesService(teamId);
    return GenerateResponse(res,200,lives);
}

const updateLives = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {teamId, lives} = req.body;
    const updatedTeam = await teamService.updateLivesService(teamId, lives);
    return GenerateResponse(res,200,updatedTeam);
}

const setAnswerHash = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {teamId, answerHash} = req.body;
    const hasupdated = await teamService.updateAnswerHashService(teamId, answerHash);
    console.log(hasupdated)
    return GenerateResponse(res,200,hasupdated);
}

export { createTeam, loginTeam, getAllTeams, getLives, updateLives, setAnswerHash};