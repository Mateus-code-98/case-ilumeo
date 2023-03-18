import { IRoutesProps } from "../../interfaces";
import { loginController } from "../../controllers/login.controller";
import { users_router } from "./../../../modules/users/routes/users.routes";
import { checks_router } from "../../../modules/checks/routes/checks.routes";
import { UserAuthenticated } from "../../middlewares/userAuthenticated.middleware";

export const _routes: IRoutesProps[] = [
    {
        method: "post",
        url: "/login",
        middlewares: [loginController]
    },
    {
        method: "use",
        url: "/users",
        middlewares: [UserAuthenticated, users_router]
    },
    {
        method: "use",
        url: "/checks",
        middlewares: [UserAuthenticated, checks_router]
    }
];