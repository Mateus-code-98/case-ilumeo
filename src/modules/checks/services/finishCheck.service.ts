import { Transaction } from "sequelize";
import { Check } from "../../../database/models";
import { statusCodes } from "../../../shared/utils/statusCodes";
import { throwError } from "../../../shared/services/throwError.service";

interface IFinishCheckServiceProps {
	id: string
	transaction?: Transaction
}

export const finishCheckService = async (props: IFinishCheckServiceProps) => {
	const { id, transaction } = props

	const check = await Check.findOne({
		where: { id }, transaction
	})

	if (!check?.id) {
		const message = "Check not found"
		const status = statusCodes.NOT_FOUND

		throwError({ message, status })
	}
	else {
		await check.update({ finished: true }, { transaction })
	}

	return props
}