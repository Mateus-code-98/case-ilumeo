import { Check } from "../../../database/models";
import { APP_TIMEZONE } from "../../../shared/utils/app_timezone";
import { getDateWithTimezoneService } from "../../../shared/services/getDateWithTimezone.service";

interface IgetChecksServiceProps {
	user_id: string;
}

export const getChecksService = async (props: IgetChecksServiceProps) => {
	const { user_id } = props;

	let checks = await Check.findAll({ where: { user_id }, order: [["createdAt", "ASC"]] });

	const checkInProgress = checks.findIndex((check) => !check.finished);

	if (checkInProgress !== -1) {
		checks[checkInProgress].updatedAt = getDateWithTimezoneService(APP_TIMEZONE)
		checks[checkInProgress].dataValues.updatedAt = getDateWithTimezoneService(APP_TIMEZONE)
	}


	return checks;
};