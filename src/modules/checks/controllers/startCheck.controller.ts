import { Request, Response } from "express";
import { database } from "../../../database/db";
import { startCheckService } from "../services/startCheck.service";
import { STATUS_CREATED } from "../../../shared/utils/status_codes";

export const startCheckController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const transaction = await database.transaction();

	try {

		const data = { user_id, transaction };

		const result = await startCheckService(data);

		await transaction.commit();

		return res.status(STATUS_CREATED).json(result);

	} catch (err) {

		await transaction.rollback();

		throw err;

	}
};