import { IRoutesProps } from "../../../../shared/interfaces";
import { getChecksController } from "../../controllers/getChecks.controller";
import { startCheckController } from "../../controllers/startCheck.controller";
import { finishCheckController } from "../../controllers/finishCheck.controller";

export const _routes: IRoutesProps[] = [
	{
		method: "post",
		url: "/",
		middlewares: [startCheckController]
	},
	{
		method: "get",
		url: "/",
		middlewares: [getChecksController]
	},
	{
		method: "put",
		url: "/:id",
		middlewares: [finishCheckController]
	}
];