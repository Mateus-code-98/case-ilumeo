
import "dotenv/config";
import "express-async-errors";
import { io, serverHttp } from "./app";
import { PORT } from "./shared/utils/envs";

io.on("connection", async (socket) => {
    console.log(`\n 🟢 - USER CONNECTED ON SOCKET ${socket.id}`);

    socket.on("disconnect", async () => {
        console.log(`\n 🔴 - USER DISCONNECTED FROM SOCKET ${socket.id}`);
    });
});

serverHttp.listen(PORT, () => {
    console.log(`\n 🚀 - SERVER IS RUNNING ON PORT ${PORT}`);
});