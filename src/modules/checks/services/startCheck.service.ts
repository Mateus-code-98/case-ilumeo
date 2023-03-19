import { Transaction } from "sequelize";
import { Check } from "../../../database/models";

interface IStartCheckServiceProps {
	user_id: string;
	transaction?: Transaction;
}

export const startCheckService = async (props: IStartCheckServiceProps) => {
	const { user_id, transaction } = props;

	const newCheck = await Check.create({ user_id }, { transaction });

	return newCheck;
};