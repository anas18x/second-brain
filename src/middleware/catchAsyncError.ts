import type { Request, Response, NextFunction } from "express";

export function catchAsyncError(fn: Function) {
    return async function (
        req: Request, 
        res: Response, 
        next: NextFunction) {
            
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}