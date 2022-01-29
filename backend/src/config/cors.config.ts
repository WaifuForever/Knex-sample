import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
const allowedOrigins = [`${process.env.HOST}`];

const headers = [
    'Origin',
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Accept',
    'Authorization',
    'Origin',
    'X-Requested-With',
    /*"Access-Control-Request-Method",*/ 'Access-Control-Allow-Credentials' /*"Access-Control-Request-Header"*/,
];
const corsOptionsDelegate = function (
    req: Request,
    callback: (arg0: null, arg1: cors.CorsOptions) => void,
) {
    const corsOptions: cors.CorsOptions = allowedOrigins.indexOf(
        req.header('Origin')!,
    )
        ? { origin: true }
        : { origin: false };

    (corsOptions.allowedHeaders = headers),
        (corsOptions.methods = ['GET', 'PUT', 'POST', 'DELETE']);
    corsOptions.credentials = true;
    callback(null, corsOptions); // callback expects two parameters: error and options
};

export default corsOptionsDelegate;