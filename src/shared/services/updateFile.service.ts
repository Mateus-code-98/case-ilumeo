import fs from "fs";

interface IUpdateFileProps {
    path: string;
    content: string;
};

export const updateFile = async (props: IUpdateFileProps) => {
    const { path, content } = props;
    
    fs.appendFileSync(path, "\n" + content)
};