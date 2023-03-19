import { io } from "../../app";

export const emitService = (event: string, data: Object) => {
    io.emit(event, data);
}