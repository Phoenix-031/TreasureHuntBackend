import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { connect } from './config/db.config';

// import { getConnectionState } from './config/db.config';
import { mainRouter } from './routes/main.route';


//firebase imports

import {onRequest} from "firebase-functions/v2/https";

dotenv.config({ path: './.env' });

const app = express()

// Add some external middlewares. These middlewares will always function for every request our express app receives.
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", mainRouter);

app.get("/", (req:Request, res:Response) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let timeString = `${hours}:${minutes}:${seconds}`;
    res.json({
        message : "Server is up and running",
        time :  timeString,
    })
})

app.use("*", (req:Request, res:Response) => {
    res.status(404).json({
        code : 404,
        type : "error",
        message : "Not Found"
    })
})

export const treasureHuntApi = onRequest(app);
