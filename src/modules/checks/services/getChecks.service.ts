import { Check } from "../../../database/models"

interface IgetChecksServiceProps {
	user_id: string
}

export const getChecksService = async (props: IgetChecksServiceProps) => {
	const { user_id } = props

	const checks = await Check.findAll({ where: { user_id } })

	return checks
}