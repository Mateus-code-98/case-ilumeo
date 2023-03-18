import "dotenv/config";
import "express-async-errors";
import express from "express";
import { PORT } from "./shared/utils/envs";
import { global_routes } from "./shared/utils/global_routes";

const app = express();

global_routes.forEach(route => app[route.method](route.url, ...route.middlewares));

app.listen(PORT, () => console.log(`\n🚀 Server is running on PORT ${PORT}\n`));