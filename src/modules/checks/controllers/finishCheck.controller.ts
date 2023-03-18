import { Request, Response } from "express";
import { database } from "../../../database/db";
import { finishCheckService } from "../services/finishCheck.service";

export const finishCheckController = async (req: Request, res: Response) => {
	const { id } = req.params;

	const transaction = await database.transaction();

	try {

		const data = { id, transaction };

		const result = await finishCheckService(data);

		await transaction.commit();

		return res.json(result);

	} catch (err) {

		await transaction.rollback();

		throw err;
		
	}
}