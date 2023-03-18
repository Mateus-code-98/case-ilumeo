require("dotenv/config");

const ENVS = require("../shared/utils/envs");

const { DB_USER, DB_DIALECT, DB_HOST, DB_NAME, DB_PASS, DB_PORT } = ENVS;

const config = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
};

module.exports = config;