import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

export const ExceptionHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) return res.status(err.statusCode).json({ ...err, status: "error" });

    return res.status(500).json({ status: "error", message: "Internal server error!" });
};