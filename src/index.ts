import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { mainRouter } from './models/routes/main.route';
import { connect } from './config/db.config';
import functions from 'firebase-functions'

import { getConnectionState } from './config/db.config';

dotenv.config({ path: './.env' });

const app = express()

// Add some external middlewares. These middlewares will always function for every request our express app receives.
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const PROJECT_NAME = String(process.env.PROJECT_NAME);
const MONGO_URI = process.env.CONNECTION_URI;
const BASE_URL = process.env.BASE_URL;
const PORT = Number(process.env.PORT) || 7826;

app.use("/api/v1", mainRouter);

app.listen(PORT, async () => {

    const db = await connect(
        MONGO_URI || '' // provide a default value if MONGO_URI is undefined
    );

    console.log(
        `${getConnectionState(db.connection.readyState)} to the database`
    );
    console.log('Server is up and running')

    // tslint:disable-next-line:no-console
    // console.log(`Listening on ${BASE_URL}:${PORT}...`);

    app.emit("ready");
});

exports.api = functions.https.onRequest(app)