import * as Yup from "yup";

const REQUIRED_MESSAGE = (path: string) => `${path} is required`;

const STRING = (path: string) => Yup.string().required(REQUIRED_MESSAGE(path));

const NUMBER = (path: string) => Yup.number().required(REQUIRED_MESSAGE(path));

export const envSchema = Yup.object().shape({
    PORT: NUMBER("PORT"),
    DB_DIALECT: STRING("DB_DIALECT"),
    DB_HOST: STRING("DB_HOST"),
    DB_NAME: STRING("DB_NAME"),
    DB_PASS: STRING("DB_PASS"),
    DB_USER: STRING("DB_USER"),
    DB_PORT: NUMBER("DB_PORT"),
    JWT_EXPIRESIN: STRING("JWT_EXPIRESIN"),
    JWT_SECRET: STRING("JWT_SECRET")
});