import { IRoutesProps } from "../../../../shared/interfaces";
import { getCheckInProgressController } from "../../controllers/getCheckInProgress.controller";
import { getUserWorkingHoursController } from "../../controllers/getUserWorkingHours.controller";

export const _routes: IRoutesProps[] = [
	{
		method: "get",
		url: "/working-hours",
		middlewares: [getUserWorkingHoursController]
	},
	{
		method: "get",
		url: "/check-in-progress",
		middlewares: [getCheckInProgressController]
	}
];