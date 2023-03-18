import Sequelize from "sequelize";
import { database } from "../../../database/db";

export interface usersAttributes {
	id: string
	code: string
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
		allowNull: false
	}
})