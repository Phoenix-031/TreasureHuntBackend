import { Request, Response, Router } from "express";
import { GenerateResponse } from "../../utils/response.creator";
import { authRouter } from "./auth.route";
import { teamRouter } from "./team.route";
import { questionRouter } from "./questions.route";

const mainRouter: Router = Router();

// Add routes defined in other files below.


// mainRouter.use('/auth', authRouter)
// mainRouter.use('/team', teamRouter)
mainRouter.use('/question',questionRouter);
mainRouter.get('/', (req : Request, res : Response) => {
    GenerateResponse(res, 200, {
        "message" : "api up and running"
    });
})
mainRouter.use((req: Request, res: Response) => {
    GenerateResponse(res, 404);
});

export { mainRouter };
