import { checksAttributes } from "../../checks/model/checks.model";
import { breakChecks } from "../../checks/services/breakChecks.service";
import { getChecksService } from "../../checks/services/getChecks.service"

interface IGetUserWorkingHoursServiceProps {
	user_id: string
}

export const getUserWorkingHoursService = async (props: IGetUserWorkingHoursServiceProps) => {
	const { user_id } = props;

	const checksByDay: any = {};

	let checks = await getChecksService({ user_id });
	checks = breakChecks(checks);

	for (const check of checks) {
		const createdAt = check.createdAt as string;
		const dataDoCheck = createdAt.substring(0, 10);

		if (!checksByDay[dataDoCheck]) checksByDay[dataDoCheck] = [check];
		else checksByDay[dataDoCheck].push(check);
	}

	const daysWorked: any = {};

	const days = Object.keys(checksByDay);

	for (const day of days) {
		const checks: checksAttributes[] = checksByDay[day];

		const workingHours = checks.reduce((acc: number, check) => {
			const { finished, createdAt, updatedAt } = check;

			if (!finished) return acc;

			const checkStart = new Date(createdAt).getTime();

			const checkEnd = new Date(updatedAt).getTime();

			const checkDuration = checkEnd - checkStart;

			return acc + checkDuration;
		}, 0);

		daysWorked[day] = { workingHours, checks };
	}

	return daysWorked;
}