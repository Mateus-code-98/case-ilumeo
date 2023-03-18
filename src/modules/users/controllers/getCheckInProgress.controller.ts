import { Request, Response } from "express";
import { getCheckInProgressService } from "../services/getCheckInProgress.service";

export const getCheckInProgressController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const result = await getCheckInProgressService({ user_id });

	return res.json(result);
}