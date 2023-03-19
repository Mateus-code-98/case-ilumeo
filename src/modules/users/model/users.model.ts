import Sequelize from "sequelize";
import { database } from "../../../database/db";
import { generateCodeService } from "../../../shared/services/generateCodeService.service";

export interface usersAttributes {
	id: string;
	code: string;
}

export interface usersInstance extends Sequelize.Model<usersAttributes, any>, usersAttributes { }

export const UsersModel = database.define<usersInstance>("users", {
	id: {
		type: Sequelize.UUID,
		allowNull: false,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
		unique: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: true
	}
}, {
	hooks: {
		beforeCreate: async (user: usersInstance) => {
			const code = await generateCodeService(UsersModel)
			user.code = code
		}
	}
});