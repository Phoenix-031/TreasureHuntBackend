/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { body, query } from "express-validator";


const authRouter = Router();


authRouter.post('verifyId');


export { authRouter };
