import { Request, Response, NextFunction } from "express";

import { GenerateResponse } from "../../utils/response.creator";

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

export { createTeam };