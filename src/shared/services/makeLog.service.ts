import fs from "fs";
import path from "path";
import { createFile } from "./createFile.service";
import { updateFile } from "./updateFile.service";

interface ILogProps {
    content: string;
    logName: string;
}

export const makeLog = (props: ILogProps) => {
    const { content, logName } = props;

    const log_path = path.resolve(__dirname, "..", "..", "logs");

    const log_file_path = `${log_path}\\${logName}.json`;

    const data = { content, path: log_file_path };

    fs.access(log_file_path, async (err) => {
        try {
            if (err) await createFile(data)
            else await updateFile(data)
        } catch (err) {

        }
    });
};