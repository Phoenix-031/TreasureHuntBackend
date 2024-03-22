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


// const PROJECT_NAME = String(process.env.PROJECT_NAME);
const MONGO_URI = process.env.CONNECTION_URI;
// const BASE_URL = process.env.BASE_URL;
const PORT = Number(process.env.PORT);

app.use("/api/v1", mainRouter);

app.listen(PORT, async () => {

    const db = await connect(
        MONGO_URI || '' // provide a default value if MONGO_URI is undefined
    );

    console.log(
        `${getConnectionState(db.connection.readyState)} to the database`
    );

    // tslint:disable-next-line:no-console
    // console.log(`Listening on ${BASE_URL}:${PORT}...`);

    app.emit("ready");
});