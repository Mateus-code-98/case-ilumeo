import Sequelize from "sequelize";
import { database } from "../../../database/db";

export interface checksAttributes {
	id: string
	finished: boolean
	user_id: string
	createdAt?: string
	updatedAt?: string
}

export interface checksInstance extends Sequelize.Model<checksAttributes, any>, checksAttributes { }

export const ChecksModel = database.define<checksInstance>("checks", {
	id: {
		type: Sequelize.UUID,
		allowNull: false,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
		unique: true
	},
	finished: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	user_id: {
		type: Sequelize.UUID,
		allowNull: false,
		references: {
			model: "users",
			key: "id"
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	}
}, {
	hooks: {
		beforeCreate: async (check: checksInstance, options) => {
			const { user_id } = check;
			const { transaction } = options;
			
			const checksNotFinished = await ChecksModel.findAll({
				where: { user_id, finished: false }
			});

			if (checksNotFinished.length > 0) {
				for (const checkNotFinished of checksNotFinished) {
					await checkNotFinished.update({
						finished: true
					}, { transaction });
				}
			}
		}
	}
});