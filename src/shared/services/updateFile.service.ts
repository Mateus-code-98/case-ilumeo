import fs from "fs";

interface IUpdateFileProps {
    path: string;
    content: string;
};

export const updateFile = async (props: IUpdateFileProps) => {
    const { path, content } = props;

    return new Promise((resolve, reject) => {
        fs.appendFile(path, "\n" + content, (err) => {
            if (err) reject(err)
            resolve(true)
        })
    });
};