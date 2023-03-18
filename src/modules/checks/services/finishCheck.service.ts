import { Transaction } from "sequelize";
import { Check } from "../../../database/models";
import { status_codes } from "../../../shared/utils/status_codes";
import { throwError } from "../../../shared/services/throwError.service";

interface IFinishCheckServiceProps {
	id: string
	transaction?: Transaction
}

export const finishCheckService = async (props: IFinishCheckServiceProps) => {
	const { id, transaction } = props;

	const check = await Check.findOne({
		where: { id }, transaction
	});

	if (!check?.id) {
		const message = "Check not found";
		const status = status_codes.NOT_FOUND;

		throwError({ message, status });
	}
	else {
		await check.update({ finished: true }, { transaction });
	}

	return props;
}