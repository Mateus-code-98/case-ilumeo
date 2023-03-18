import { NextFunction, Request, Response } from "express";
import { throwError } from "../services/throwError.service";
import { STATUS_CONFLICT, STATUS_BAD_REQUEST } from "../utils/status_codes";

const UNIQUE_VIOLATION = "unique violation";
const NOT_NULL_VIOLATION = "notNull Violation";

export const ExceptionParams = (err: any, req: Request, res: Response, next: NextFunction) => {
    const type = err.errors ? err.errors[0].type : null
    const path: string | null = err.errors ? err.errors[0].path : null

    if (type === UNIQUE_VIOLATION) {
        const message = `${path?.toLocaleUpperCase()} already exists!`;
        const status = STATUS_CONFLICT;

        throwError({ message, status });
    }
    else if (type === NOT_NULL_VIOLATION) {
        const message = `${path?.toLocaleUpperCase()} is required!`;
        const status = STATUS_BAD_REQUEST;

        throwError({ message, status });
    }

    return next(err);
};