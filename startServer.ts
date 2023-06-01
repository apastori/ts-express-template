import { IMiddleware } from './IMiddleware';

import { Request, Response, NextFunction } from 'express';

let startServerLogEnv: IMiddleware = function(req?: Request, res?: Response, next?: NextFunction): void {
    console.log(`Express with Typescript! http://localhost:${Number(process.env.PORT)}`);
    console.log(process.env);
}

export { startServerLogEnv }