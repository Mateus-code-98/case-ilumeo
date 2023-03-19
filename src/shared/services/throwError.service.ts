import { AppError } from "../errors/AppError";

interface IThrowError {
    message: string;
    status: number;
};

export const throwError = (props: IThrowError) => {
    const { message, status } = props;

    throw new AppError(message, status);
};