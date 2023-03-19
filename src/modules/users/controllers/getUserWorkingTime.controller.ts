import { Request, Response } from "express";
import { STATUS_OK } from "../../../shared/utils/status_codes";
import { getUserWorkingTimeService } from "../services/getUserWorkingTime.service";

export const getUserWorkingTimeController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const result = await getUserWorkingTimeService({ user_id });

	return res.status(STATUS_OK).json(result);
};