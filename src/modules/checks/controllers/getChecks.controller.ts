import { Request, Response } from "express";
import { getChecksService } from "../services/getChecks.service";

export const getChecksController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const result = await getChecksService({ user_id });
	
	return res.json(result);
}