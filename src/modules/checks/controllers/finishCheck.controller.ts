import { Request, Response } from "express";
import { database } from "../../../database/db";
import { STATUS_OK } from "../../../shared/utils/status_codes";
import { finishCheckService } from "../services/finishCheck.service";

export const finishCheckController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const transaction = await database.transaction();

	try {

		const data = { user_id, transaction };
		
		const result = await finishCheckService(data);

		await transaction.commit();

		return res.status(STATUS_OK).json(result);

	} catch (err) {
		
		await transaction.rollback();

		throw err;

	}
};