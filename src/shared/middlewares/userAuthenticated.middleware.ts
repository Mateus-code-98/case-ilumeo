import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../utils/envs";
import { User } from "../../database/models";
import { NextFunction, Request, Response } from "express";
import { throwError } from "../services/throwError.service";
import { STATUS_UNAUTHORIZED } from "../utils/status_codes";

export const UserAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throwError({
            message: "JWT token is missing",
            status: STATUS_UNAUTHORIZED
        });
    }

    const token = authHeader?.split(" ")[1] ?? "";

    try {
        const decoded = verify(token, JWT_SECRET);

        const user_id = decoded.sub as string;

        const user = await User.findByPk(user_id);

        if (!user) {
            throwError({
                message: "User not found",
                status: STATUS_UNAUTHORIZED
            });
        }

        req.user = { id: user_id };

        return next();

    } catch (err) {

        throwError({
            message: "JWT token invalid",
            status: STATUS_UNAUTHORIZED
        });

    }
}