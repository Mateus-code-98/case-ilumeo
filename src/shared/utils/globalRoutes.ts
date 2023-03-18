import cors from "cors";
import express from "express";
import { routes } from "../routes";
import { IRoutesProps } from "../interfaces";
import { logRoute } from "../middlewares/logRoute";
import { ExceptionParams } from "../middlewares/exceptionParams";
import { ExceptionHandler } from "../middlewares/exceptionHandler";

export const globalRoutes: IRoutesProps[] = [
    { method: "use", url: "", middlewares: [cors()] },
    { method: "use", url: "", middlewares: [express.json()] },
    { method: "use", url: "", middlewares: [logRoute] },
    { method: "use", url: "", middlewares: [routes] },
    { method: "use", url: "", middlewares: [ExceptionParams] },
    { method: "use", url: "", middlewares: [ExceptionHandler] }
]