import express from 'express';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

import countryRoute from '../routes/country.route';
import teamRoute from '../routes/team.route';
import pilotRoute from '../routes/pilot.route';
/*
import mangaRoute from '../routes/manga.route.js';
import reviewRoute from '../routes/review.route.js';
import userRoute from '../routes/user.route.js';
*/

import corsOptionsDelegate from './cors.config';
import limiter from './limiter.config';

//import { response } from '../middlewares/response.middleware.js';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static('uploads'));

//app.use(cookieParser());
app.use(cors(corsOptionsDelegate));
app.use(limiter); // limiting all requests
//app.use(response);
app.use('/countries', countryRoute);
app.use('/pilots', pilotRoute);
app.use('/teams', teamRoute);

export { app };
