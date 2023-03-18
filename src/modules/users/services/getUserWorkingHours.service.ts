import { checksAttributes } from "../../checks/model/checks.model";
import { getChecksService } from "../../checks/services/getChecks.service"

interface IGetUserWorkingHoursServiceProps {
	user_id: string
}

export const getUserWorkingHoursService = async (props: IGetUserWorkingHoursServiceProps) => {
	const { user_id } = props;

	const checksByDay: any = {};

	const checks = await getChecksService({ user_id })

	for (const check of checks) {
		const dataDoCheck = check?.createdAt?.substring(0, 10);
		if (!dataDoCheck) continue;

		if (!checksByDay[dataDoCheck]) checksByDay[dataDoCheck] = [check];
		else checksByDay[dataDoCheck].push(check);
	}

	const workingHoursByDay: any = {};

	const days = Object.keys(checksByDay);

	for (const day of days) {
		const checks: checksAttributes[] = checksByDay[day];

		const workingHours = checks.reduce((acc: number, check) => {
			const { finished, createdAt, updatedAt } = check;

			if (!finished || !createdAt || !updatedAt) return acc;

			const checkStart = new Date(createdAt).getTime();

			const checkEnd = new Date(updatedAt).getTime();

			const checkDuration = checkEnd - checkStart;

			return acc + checkDuration;
		}, 0);

		workingHoursByDay[day] = workingHours;
	}

	return workingHoursByDay
}