import { Check } from "../../../database/models";

interface IGetCheckNotFinishedProps {
    user_id: string;
};

export const getCheckNotFinished = async (props: IGetCheckNotFinishedProps) => {
    const { user_id } = props;

    const checkNotFinished = await Check.findOne({
        where: { user_id, finished: false }
    });

    return checkNotFinished;
}