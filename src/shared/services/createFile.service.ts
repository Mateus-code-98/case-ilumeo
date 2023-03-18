import fs from "fs";

interface ICreateFileProps {
    path: string;
    content: string;
};

export const createFile = async (props: ICreateFileProps) => {
    const { path, content } = props;

    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) reject(err)
            resolve(true)
        })
    });
};