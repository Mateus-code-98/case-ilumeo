import { sign } from "jsonwebtoken";
import { User } from "../../database/models";
import { throwError } from "./throwError.service";
import { STATUS_NOT_FOUND } from "../utils/status_codes";
import { JWT_EXPIRESIN, JWT_SECRET } from "../utils/envs";

interface ILoginProps {
    code: string;
}

export const loginService = async (props: ILoginProps) => {
    const { code } = props;

    const user = await User.findOne({ where: { code } });

    if (user) {

        const token = sign({}, JWT_SECRET, {
            subject: user.id,
            expiresIn: JWT_EXPIRESIN as string
        })
        
        return { user, token }
    }

    const message = "User not found";
    const status = STATUS_NOT_FOUND;
    throwError({ message, status })
}