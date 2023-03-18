import { Router } from "express";
import { IRoutesProps } from "../interfaces";

interface ISetUpRoutesProps {
    _routes: IRoutesProps[];
};

export const setUpRoutes = (props: ISetUpRoutesProps) => {
    const { _routes } = props;

    const router = Router();

    _routes.forEach(route => router[route.method](route.url, ...route.middlewares));

    return router;
};