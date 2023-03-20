import { Check } from "../../../database/models";
import { newDate } from "../../../shared/services/newDate";

interface IgetChecksServiceProps {
	user_id: string;
}

export const getChecksService = async (props: IgetChecksServiceProps) => {
	const { user_id } = props;

	let checks = await Check.findAll({ where: { user_id }, order: [["createdAt", "ASC"]] });

	const checkInProgress = checks.findIndex((check) => !check.finished);

	if (checkInProgress !== -1) {
		checks[checkInProgress].updatedAt = newDate()
		checks[checkInProgress].dataValues.updatedAt = newDate()
	}


	return checks;
};