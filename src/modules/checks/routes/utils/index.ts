import { IRoutesProps } from "../../../../shared/interfaces";
import { startCheckController } from "../../controllers/startCheck.controller";
import { finishCheckController } from "../../controllers/finishCheck.controller";

export const _routes: IRoutesProps[] = [
	{
		method: "post",
		url: "/",
		middlewares: [startCheckController]
	},
	{
		method: "put",
		url: "/",
		middlewares: [finishCheckController]
	}
];