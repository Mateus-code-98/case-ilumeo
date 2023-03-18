import { IRoutesProps } from "../../../../shared/interfaces";
import { getUserWorkingHoursController } from "../../controllers/getUserWorkingHours.controller";

export const _routes: IRoutesProps[] = [
	{ method: "get", url: "/working-hours", middlewares: [getUserWorkingHoursController] }
];