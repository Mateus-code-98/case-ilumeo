import { Request, Response } from "express";
import { STATUS_OK } from "../utils/status_codes";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, res: Response) => {
    let { code } = req.body;
    code = code?.toUpperCase() ?? "";

    const result = await loginService({ code });

    return res.status(STATUS_OK).json(result);
};