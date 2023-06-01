import { IMiddleware } from './IMiddleware';

import { Request, Response, NextFunction } from 'express';

let initialRoute: IMiddleware = function(req?: Request, res?: Response, next?: NextFunction): void {
    if (res == null) {
        throw new Error("Res object not defined");
    }
    res.send("HomePage");
}

export { initialRoute }