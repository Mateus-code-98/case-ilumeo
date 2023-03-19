import Sequelize from "sequelize";
import { database } from "../../../database/db";
import { emitService } from "../../../shared/services/emitService.service";

export interface checksAttributes {
	id: string
	finished: boolean
	user_id: string
	createdAt: string | Date
	updatedAt: string | Date
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
	},
	createdAt: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	updatedAt: {
		type: Sequelize.DATE,
		allowNull: false,
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
		},
		afterSave: async (check: checksInstance, options) => {
			const { user_id } = check;
			const { transaction } = options;
			if (transaction) transaction.afterCommit(async () => emitService(user_id, {}));
			else emitService(user_id, {});
		}
	}
});