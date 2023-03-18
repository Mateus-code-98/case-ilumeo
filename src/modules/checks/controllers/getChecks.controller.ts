import { Request, Response } from "express";
import { STATUS_OK } from "../../../shared/utils/status_codes";
import { getChecksService } from "../services/getChecks.service";

export const getChecksController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const result = await getChecksService({ user_id });

	return res.status(STATUS_OK).json(result);
}