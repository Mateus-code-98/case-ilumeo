import { Check } from "../../../database/models";

interface IGetCheckInProgressServiceProps {
    user_id: string;
};

export const getCheckInProgressService = async (props: IGetCheckInProgressServiceProps) => {
    const { user_id } = props;

    const checkNotFinished = await Check.findOne({
        where: { user_id, finished: false }
    });

    return checkNotFinished;
}