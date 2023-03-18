import { status_codes } from "../utils/status_codes";
import { NextFunction, Request, Response } from "express";
import { throwError } from "../services/throwError.service";

export const ExceptionParams = (err: any, req: Request, res: Response, next: NextFunction) => {
    const type = err.errors ? err.errors[0].type : null
    const path: string | null = err.errors ? err.errors[0].path : null

    if (type === "unique violation") {
        const message = `${path?.toLocaleUpperCase()} already exists!`;
        const status = status_codes.CONFLIT;

        throwError({ message, status });
    }
    else if (type === "notNull Violation") {
        const message = `${path?.toLocaleUpperCase()} is required!`;
        const status = status_codes.BAD_REQUEST;

        throwError({ message, status });
    }

    return next(err);
};