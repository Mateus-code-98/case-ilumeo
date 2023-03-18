import "dotenv/config";
import "express-async-errors";
import express from "express";
import { global_routes } from "./shared/utils/global_routes";

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();

global_routes.forEach(route => app[route.method](route.url, ...route.middlewares));

app.listen(port, () => console.log(`\n🚀 Server is running on PORT ${port} `));