import { Check } from "../../../database/models";

interface IgetChecksServiceProps {
	user_id: string;
}

export const getChecksService = async (props: IgetChecksServiceProps) => {
	const { user_id } = props;

	let checks = await Check.findAll({ where: { user_id }, order: [["createdAt", "ASC"]] });

	const checkInProgress = checks.findIndex((check) => !check.finished);

	if (checkInProgress !== -1) {
		checks[checkInProgress].updatedAt = new Date();
		checks[checkInProgress].dataValues.updatedAt = new Date();
	}


	return checks;
};