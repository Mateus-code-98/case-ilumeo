import http from "http";
import express from "express";
import { Server } from "socket.io";
import { global_routes } from "./shared/utils/global_routes";

const app = express();

global_routes.forEach(route => app[route.method](route.url, ...route.middlewares));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, { cors: { origin: "*" } });

export { app, serverHttp, io };