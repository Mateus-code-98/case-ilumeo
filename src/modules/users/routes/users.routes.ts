import { _routes } from "./utils";
import { setUpRoutes } from "../../../shared/services/setUpRoutes.service";

const users_router = setUpRoutes({ _routes });

export { users_router };