import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { GenerateResponse } from './utils/response.creator';
import { connect } from './config/db.config';

import { getConnectionState } from './config/db.config';
import { mainRouter } from './routes/main.route';

dotenv.config({ path: './.env' });

const app = express()

// Add some external middlewares. These middlewares will always function for every request our express app receives.
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const PROJECT_NAME = String(process.env.PROJECT_NAME);
const MONGO_URI = process.env.CONNECTION_URI;
const BASE_URL = process.env.BASE_URL;
const PORT = Number(process.env.PORT);

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

app.listen(PORT, async () => {

    const db = await connect(
        MONGO_URI || '' // provide a default value if MONGO_URI is undefined
    );

    console.log(
        `${getConnectionState(db.connection.readyState)} to the database ${db.connection.name}`
    );
    console.log('server is up and running')

    // tslint:disable-next-line:no-console
    // console.log(`Listening on ${BASE_URL}:${PORT}...`);

    app.emit("ready");
});