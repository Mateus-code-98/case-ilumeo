import { IRoutesProps } from "../../../../shared/interfaces";
import { getCheckInProgressController } from "../../controllers/getCheckInProgress.controller";
import { getUserWorkingTimeController } from "../../controllers/getUserWorkingTime.controller";

export const _routes: IRoutesProps[] = [
	{
		method: "get",
		url: "/working-time",
		middlewares: [getUserWorkingTimeController]
	},
	{
		method: "get",
		url: "/check-in-progress",
		middlewares: [getCheckInProgressController]
	}
];