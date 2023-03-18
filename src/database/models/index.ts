import { UsersModel } from "../../modules/users/model/users.model";
import { ChecksModel } from "../../modules/checks/model/checks.model";

UsersModel.hasMany(ChecksModel, { foreignKey: "user_id" });

ChecksModel.belongsTo(UsersModel, { foreignKey: "user_id" });

export const User = UsersModel;
export const Check = ChecksModel;
