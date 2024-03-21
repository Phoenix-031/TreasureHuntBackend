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


            const qs:TeamSchemaDto  = await teamService.createTeamService(dto);

            return GenerateResponse(res,201,qs)
            
        } catch (error) {
            console.log(error);
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
        if(qs!== null)
            return GenerateResponse(res,200,qs)

        return GenerateResponse(res,401,{
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

export { createTeam, loginTeam, getAllTeams };