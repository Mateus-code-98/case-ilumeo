import config from "../config/database";
import { Sequelize, Options } from "sequelize";

export const database = new Sequelize({
    ...config,
    logging: false
} as Options);