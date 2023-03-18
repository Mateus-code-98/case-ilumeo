import { _routes } from "./utils/routes";
import { setUpRoutes } from "../services/setUpRoutes.service";

const routes = setUpRoutes({ _routes })

export { routes }
