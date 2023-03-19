
import "dotenv/config";
import "express-async-errors";
import { io, serverHttp } from "./app";
import { PORT } from "./shared/utils/envs";

io.on("connection", async (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("disconnect", async () => {
        console.log(`Usuário desconectado do socket ${socket.id}`)
    })
})

serverHttp.listen(PORT, () => {
    console.log(`\n🚀 Server is running on PORT ${PORT}\n`)
})