import * as Yup from "yup";

const REQUIRED_MESSAGE = "This field is required";

const MODES_ALLOWED = ["DEV", "PROD"];

const STRING = Yup.string().required(REQUIRED_MESSAGE);

const NUMBER = Yup.number().required(REQUIRED_MESSAGE);

export const envSchema = Yup.object().shape({
    PORT: NUMBER,
    DB_DIALECT: STRING,
    DB_HOST: STRING,
    DB_NAME: STRING,
    DB_PASS: STRING,
    DB_USER: STRING,
    DB_PORT: NUMBER,
    JWT_EXPIRESIN: STRING,
    JWT_SECRET: STRING,
    MODE: Yup.string().oneOf(MODES_ALLOWED).required(REQUIRED_MESSAGE)
});